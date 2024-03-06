'use client';

import { useRef, useState } from 'react';
import classes from './image-picker.module.css';
import Image from 'next/image';

export default function ImagePicker({label, name}: {label: string, name: string}) {
    const [pickedImage, setPicketImage] = useState<null|string>()
    const imageInput = useRef<HTMLInputElement>();

    function handlePickClick() {
        if (imageInput.current) {
            imageInput.current.click();
        }
    }

    function handleImageChange(event: any) {
        const file = event.target.files[0];
        if (!file) {
            setPicketImage(null);
            return;
        }

        const fileReader = new FileReader();
        fileReader.onload = (url) => {
            setPicketImage(fileReader.result as string);
        };
        fileReader.readAsDataURL(file);
    }

    return <>
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!pickedImage && <p>No image picked yet.</p>}
                    {pickedImage && (<Image src={pickedImage} alt='The image selected by user'  fill/>)}
                </div>
                <input 
                    className={classes.input}
                    type='file' 
                    id={name} 
                    accept='image/png, image/jpeg' 
                    name={name}
                    onChange={handleImageChange}
                    required
                />
                <button className={classes.button} type='button' onClick={handlePickClick}>
                    Pick Image
                </button>
            </div>
        </div>
    </>
}