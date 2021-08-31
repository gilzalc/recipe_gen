import React from "react";
import { Upload, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import {makeStyles} from "@material-ui/core/styles";
import './NewStoryDropImg.css'
import resolveAfter2Seconds from "./resolveAfter2seconds";
const useStyles = makeStyles((theme) => ({
    root: {
        zoom: "100%",
        justifyContent: 'space-around',
        overflow: 'hidden',
        background: "none",
    },}))


function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });
}

class NewStoryDropImg extends React.Component {
    state = {
        previewVisible: false,
        previewImage: "",
        previewTitle: "",
        fileList: this.props.tempRecipe.tempStoryImages,
    };

    handleCancel = () => this.setState({ previewVisible: false });
    //Image Preview
    handlePreview = async (file) => {
        console.log("handle preview");
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }

        this.setState({
            previewImage: file.url || file.preview,
            previewVisible: true,
            previewTitle:
                file.name || file.url.substring(file.url.lastIndexOf("/") + 1)
        });
    };

     handleChange =  ({ fileList }) => {
        if(!fileList) return;
        for (let i = 0 ; i< fileList.length; i++) {
            fileList[i].status = "success"
        }

        this.props.tempRecipe.tempStoryImages = fileList;
        console.log("handle change", fileList);

        this.setState({ fileList });
    };

    render() {
        const { previewVisible, previewImage, fileList, previewTitle } = this.state;
        console.log(fileList);
        return (
            <div className="UploadDiv">
                <h2 className="header1">Every picture tells a story</h2>
                <Upload className="parent1"
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                    listType="picture-card"
                    fileList={fileList}
                    onPreview={this.handlePreview}
                    onChange={this.handleChange}
                        accept={['image/*']}
                >
                    {fileList.length < 6 && (
                        <div>
                            <PlusOutlined />
                            <div style={{ marginTop: 8 }}>Upload</div>
                        </div>
                    )}
                </Upload>
                <Modal
                    visible={previewVisible}
                    title={previewTitle}
                    footer={null}
                    onCancel={this.handleCancel}
                >
                    <img alt="example" style={{ width: "100%" }} src={previewImage} />
                </Modal>
            </div>
        );
    }
}

export default NewStoryDropImg;
