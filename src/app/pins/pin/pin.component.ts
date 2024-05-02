import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FileUploader, FileItem } from 'ng2-file-upload';
import { CustomerService } from '../../services/customer.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import * as FileSaver from 'file-saver';

@Component({
    selector: 'app-pin',
    templateUrl: './pin.component.html',
    styleUrls: ['./pin.component.scss']
})
export class PinComponent implements OnInit {

    pinForm!: FormGroup;
    uploader!: FileUploader;
    collaborators: any[] = [];
    // imageDirectory = 'assets/images/pins/';

    constructor(
        private fb: FormBuilder,
        private customerService: CustomerService,
        public activeModal: NgbActiveModal
    ) { }

    ngOnInit() {
        this.initForm();
        this.initUploader();
        this.fetchCollaborators();
    }

    initForm() {
        this.pinForm = this.fb.group({
            title: ['', Validators.required],
            image: ['', Validators.required],
            collaborators: [[], Validators.required],
            privacy: ['Public', Validators.required]
        });
    }

    initUploader() {
        this.uploader = new FileUploader({
            url: '', // 'http://localhost:3000/upload',
            disableMultipart: false,
            autoUpload: false,
            allowedFileType: ['image', 'pdf']
        });
    }

    fetchCollaborators() {
        this.collaborators = this.customerService.getCustomers().map(customer => ({
            optionId: customer.name,
            optionTitle: customer.name
        }));
    }

    onSubmit() {
        if (this.pinForm.valid) {
            const formData = this.pinForm.value;
            const fileItem = this.uploader.queue[0];

            // Create a new pin object
            const newPin = {
                title: formData.title,
                imageUrl: '', // Set the image URL after uploading the file
                collaborators: formData.collaborators,
                privacy: formData.privacy
            };

            // Save the image file
            this.saveImage(fileItem).then(
                (imageUrl: string) => {
                    newPin.imageUrl = imageUrl;

                    // Save the new pin to local storage
                    this.savePinToLocalStorage(newPin);

                    // Close the modal and emit the new pin data
                    this.activeModal.close(newPin);
                },
                (error) => {
                    console.error('Error saving image:', error);
                }
            );
        }
    }

    saveImage(fileItem: FileItem): Promise<string> {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (event: any) => {
                const blob = new Blob([event.target.result], { type: fileItem.file.type });
                const filename = fileItem.file.name;
                FileSaver.saveAs(blob, filename);
                const imageUrl = URL.createObjectURL(blob);
                resolve(imageUrl);
            };
            reader.onerror = (error) => {
                reject(error);
            };
            reader.readAsArrayBuffer(fileItem._file);
        });
    }

    savePinToLocalStorage(pin: any) {
        const pins = JSON.parse(localStorage.getItem('pins') || '[]');
        pins.push(pin);
        localStorage.setItem('pins', JSON.stringify(pins));
    }

}
