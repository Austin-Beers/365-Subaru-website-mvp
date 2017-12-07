const WALMART_SEARCH_URL = 'https://api.walmartlabs.com/v1/search'
let headerState = {
    pageStage: "start"
}

function renderStartPage() {
    headerState.gameStage = "start";
    const partsButton = `<button class="parts-button">blah1</button>`;
    const galleryButton = `<button class="gallery-button">blah2</button>`;
    const AAbutton = `<button class="AA-button">blah3</button>`;
    const heading = `<h1>365 Subaru</h1>`;
    $(".start-page").html(heading + partsButton + galleryButton + AAbutton);
    $(".parts-button").click(renderPartsPage);
    $(".AA-button").click(renderAAPage);
    $(".gallery-button").click(renderGalleryPage);
    //convert to form similar to parts page
};

function renderGalleryPage() {
    $(".gallery-page").show();
    $(".start-page").hide();
    headerState.pageStage = "gallery";
}

function renderAAPage() {
    console.log("beanbag");
    $(".aa-page").show();
    $(".start-page").hide();
    headerState.pageStage = "AA";
    //   $("aa-search-button").click(function(){
    //   const searchAA = $(".aa-search-input").val()
    //   renderEtsyResults();
    $(".aa-search-form").submit(event => {
        event.preventDefault();
        const aaTarget = $(event.currentTarget).find("aa-search-input");
        const aaQuery = aaTarget.val();
        partsTarget.val("");
        getDatafromEtsy(aaQuery, displayEtsyData);
    });
}

function renderPartsPage() {
    console.log("clicked parts");
    $(".parts-page").show();
    $(".start-page").hide();
    headerState.pageStage = "parts";
    $(".parts-search-form").submit(event => {
        
        event.preventDefault();
        const partsTarget = $(event.currentTarget).find(".parts-search-input");
        const partsQuery = partsTarget.val();
        partsTarget.val("");
        getDataFromWalmart(partsQuery, displayWalmartData);
    });
}

function getDataFromWalmart(searchTerm, callback) {
    console.log(searchTerm)
    const settings = {
      url: WALMART_SEARCH_URL,
      data: {
        apiKey: 'f4arv7xx2b3a7n6tpvezn945',
        query: searchTerm,
      },
      dataType: 'jsonp',
      type: 'GET',
      success: callback
    };
  $.ajax(settings);
  }

function displayWalmartData(data){
    console.log(data, "data")
}         


  renderStartPage();