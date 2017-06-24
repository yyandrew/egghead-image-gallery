import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as GalleryActions from './actions.js';
import { bindActionCreators } from 'redux';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  handleThumbClick(selectedImage) {
    console.log(selectedImage)
    this.setState({selectedImage});
  }
  render() {
    const {images, selectedImage, selectImage} = this.props;

    return (
      <div className="image-gallery">
        <div className="gallery-image">
          <div>
            <img src={selectedImage} />
          </div>
        </div>
        <div>
          {images.map((image, index) => (
            <div key={index} onClick={() => selectImage(image)}>
                <img src={image} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    images: state.images,
    selectedImage: state.selectedImage
  }
}

function mapActionCreatorsToProps(dispatch) {
  return bindActionCreators(GalleryActions, dispatch)
}
export default connect(mapStateToProps, mapActionCreatorsToProps)(Gallery);
