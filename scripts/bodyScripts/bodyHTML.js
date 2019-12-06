const contentElement = document.querySelector('#bodyContent')

const bodyHTML = () => {
  contentElement.innerHTML += `
  <nav>
    <h1>EYES ON THE SKY</h1>
  </nav>

  <main>
    <section class="searchByDate">
      <h3>SEARCH PHOTOS BY DATE</h3>
      <div>
        <h5>MOST POPULAR PHOTO OF THE DAY:</h5>
        <div class="photoOfTheDayDiv"></div>
        <h5>SEARCH RESULTS:</h5>
        <!-- Date search bar here -->
        <!-- Put photos from search here with JS 
          <article></article>
        <article></article>
        <article></article> -->
      </div>
    </section>
    
    <section class="masterPhotoList">
      <h2>MASTER PHOTO LIST</h2>
      <h3>FILTER PHOTOS BY CAMERA</h3>
      <div>
        <h5>*All photos will go here*</h5>
        <div id="masterPhotos"></div>
        <!-- Cam search bar here -->
        <!-- Photo API Master list here
        <article></article>
        <article></article>
        <article></article> -->
      </div>
    </section>

    <section class="favPhotos">
      <h3>YOUR FAVORITE PHOTOS</h3>
      <div>
        <h5>*Be able to add photos from master photo list and remove (maybe add notes as well)*</h5>
        <!-- Print your fav photos here with JS
        <article></article>
        <article></article>
        <article></article> -->
      </div>
    </section>

  </main>
`}

export const useBodyHTML = () => {
  return bodyHTML()
}