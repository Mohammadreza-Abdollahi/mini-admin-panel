export const init = {
  photos: [],
  filteredPhotos: [],
  albumId: 1,
  albums: [],
};

export const galleryReducer = (state, action) => {
  switch (action.type) {
    case "getAlbumId":
      return {
        ...state,
        albumId: action.payload,
      };
    case "getAlbums":
      return {
        ...state,
        albums: action.payload,
      };
    case "changeAlbumId":
      return {
        ...state,
        albumId: action.payload,
      };
    case "getPhotos":
      return {
        ...state,
        photos: action.payload,
      };
    case "filterPhotos":
      return {
        ...state,
        filteredPhotos: state.photos.filter(
          (item) => item.albumId === state.albumId
        ),
      };
    default:
      return state;
  }
};
