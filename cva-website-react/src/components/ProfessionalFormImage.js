import React, {Component} from 'react';
import axios from "axios";
import API_ENDPOINT from "../config";

class ProfessionalFormImage extends Component {

    fileReader = new FileReader();

    state = {
        image64: "test",
        form: {
            image: ''
        }
    };

    handleImageUpload = ({target}) => {
        const selectedImage = target.files[0];

        this.fileReader.onload = ({target}) => {
            this.setState({
                image: target.result,
                form: {image: selectedImage}
            });
        };



        this.fileReader.readAsDataURL(selectedImage);



    };

    saveImageUpload = async (e) => {
        e.preventDefault();

        const {form} = this.state;

        const formData = new FormData();


        formData.append('image', form.image);

        const {data} = await axios.post(`${API_ENDPOINT}/store-image`, formData);
        console.log(data);

    };

    render() {
        return (
            <div>
                <form onSubmit={this.saveImageUpload}>
                    <input
                        type="file"
                        onChange={this.handleImageUpload}
                    />
                    <div className="image-container">
                        <img src={this.state.image64} alt={'Professional Foto'} width={"400"}/>
                    </div>
                    <button type={"submit"}>Opslaan</button>
                </form>
            </div>
        )
    }


}


export default ProfessionalFormImage;
