// const getImagenPromesa = () => new Promise( ( resolve => resolve('https://hola.com') ) );
// getImagenPromesa().then(console.log);

const getImagen = async () => {
  try {
    const api_key = "8ljUlH8jQSmypIvhHDdjwQ3LQCzU0nDs";
    const resp = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${api_key}`
    );
    const { data } = await resp.json();

    console.log(data);

    const { url } = data.images.original;

    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  } catch (error) {
    // manejo del error
    console.error(error);
  }
};

getImagen();
