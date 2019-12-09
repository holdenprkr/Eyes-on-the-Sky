const contentElement = document.querySelector('#bodyContent')

const bodyHTML = () => {
  contentElement.innerHTML += `
  <nav>
    <h1>EYES ON THE SKY</h1>
  </nav>

  <main>
    <section class="searchByDate">
      <div>
        <h2>MOST POPULAR PHOTO OF THE DAY:</h2>
        <div class="photoOfTheDayDiv"></div>
        <!-- Date search bar here -->
        <!-- Put photos from search here with JS 
          <article></article>
        <article></article>
        <article></article> -->
      </div>
    </section>
    
    <section class="masterPhotoList">
      <h2>MASTER PHOTO LIST</h2>
      <h3>FILTER PHOTOS BY PROBE</h3>
      <h3>SEARCH PHOTOS BY DATE</h3>
      <form>
      <label for="probe_choice">Probe: </label>
      <select id="tutorial_choice">
        <option value="0">Select a probe...</option>
        <option value="1">curiosity</option>
        <option value="2">opportunity</option>
        <option value="3">spirit</option>
      </select>
      <label for="probe_date">Date: </label>
      <input type="date" name="probePhotoDate">
      </form>
      <div>
        <div id="masterPhotos"></div>
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