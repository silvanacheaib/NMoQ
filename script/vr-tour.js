//ARRAYS 
// POPUP CONTENT
const popupData = [
    {
        id: "RPN.2018.0001",
        title: "Devonian Fish: 400 million years old fossil",
        description: `This specimen is a portion of a placoderm fish fossil 
        encountered at a depth of 12, 560 feet(around 3, 828 meters) in core 35 of well DK- 0065, 
        which was spudded on July 20, 1958. This fossil, identified as Qataraspis deprofundis, 
        dates to the lower or middle Devonian period, approximately 400 million years ago.
        It represents the right anterior - lateral plate of the fish.The species was named Qataraspis 
        deprofundis to reflect both its discovery in Qatar and the significant depth at which it was found.
        This fossil, which has been loaned from the Natural History Museum in London, is considered a new 
        genus and species in science.It provides valuable insights into Devonian marine life and aids in 
        understanding the geological history of the strata in which it was found.A replica of the fish’s 
        armor plate offers an idea of its shape.`,
        image: `../images/items/Devonian Fish.png`
    },
    {
        id: "QNM.2015.8",
        title: "Crocodile Skull",
        description: `The fossil crocodylian skull, found in 2005 in southwest Qatar just east of the Salwa Road 
      near the Saudi border, The dorsal surface of the skull is exposed, and preservation renders many elements 
      cracked and weathered, yet sutures separating the bones are clear.
      The long, narrow snout is represented by premaxillae, maxillae and nasals but elements immediately anterior 
      to the orbits are more difficult to interpret.The elements forming the orbits and skull roof are well preserved.
      They reveal large, trapezoidal orbits and expansive, ovoid supratemporal fenestrae for the attachment of 
      jaw musculature.Measuring 81 cm in total length, the skull has a maximum width of 29 cm measured at the 
      jugals and a narrowest snout width of 9.5 cm.The rostrum accounts for 70 percent of the skull’s 
      length and the post - rostrum represents 30 percent.The skull's features indicate the fossil species is 
      a tomistomine, closely resembling a number of European and African species from the same time period, 
      but with notable differences in proportions of elements and the shape of their sutural contacts.`,
        image: "../images/items/Crocodile Skull.png"
    },
    {
        id: "QM.2018.0147",
        title: "fossil skeleton",
        description: `Mounted skeleton of a dugongid, a marine mammal family that includes present-day sea cows. 
        This specimen includes an almost complete set of ribs, various cervical, dorsal, and caudal vertebrae, 
        along with fragments of limbs and the skull. It dates back to the early Miocene era and was discovered 
        in the lower strata of the Dammam Formation in Qatar.`,
        image: "../images/items/fossil skeleton.png"
    },
    {
        id: "QNM.2013.88.98",
        title: "Desert Rose",
        description: `The Desert Rose is a cluster of gypsum or baryte crystals arranged in a rosette shape. 
         These crystals form circular arrays of flat plates containing trapped sand particles giving it a shape 
         similar to a rose blossom. Desert roses are formed through a long-term process involving gypsum formation 
         below the surface of coastal or inland sabkhas. Due to extremely high evaporation rates, sabkha groundwater 
         reaches salinity levels that exceed the concentration of seawater, causing gypsum, a calcium sulfate mineral, 
         to precipitate and form desert roses. The color of the desert rose varies depending on the sediment incorporated 
         into the crystal structure. Desert roses are a common geological phenomenon found in Qatar's coastal and inland 
         sabkhas, particularly at Khor Al - Adaid and Dukhan.The complex form of the desert rose, inspired the striking 
         design of the National Museum of Qatar`,
        image: "../images/items/Desert rose.png"
    },
    {
        id: "RPN.2018.0355",
        title: "Rhincodon typus",
        description: `The whale shark, recognized for its large size, rounded head, and crescent - shaped tail fin, 
            has a dark bluish - grey to brown dorsal side with unique light spots, while its underside is whitish.This 
            filter - feeder, with small, scale - like teeth, primarily lives in offshore waters but occasionally ventures 
            near shore, often accompanied by pelagic fish like tuna.Whale sharks undertake long migrations, returning to 
            certain locations yearly.Qatar hosts one of the largest whale shark gatherings globally, with over a hundred 
            observed near the Al - Shaheen oil field each summer.A conservation initiative led by the Ministry of 
            Municipality and Environment and the Maersk Oil Research and Technology Centre utilizes offshore platforms as 
            artificial reefs to support these sharks.`,
        image: "../images/items/wale shark.png"
    }
];
const GalleryDesctiption =[
    {
        id:`intro`,
        english_gallery_title: ``,
        arabic_gallery_title:` `,
        english_gallery_description:``,
        arabic_gallery_description:`
        `
    },
    {
        id:`G1`,
        english_gallery_title: `The formation of Qatar`,
        arabic_gallery_title:`التكوين الجيلوجي لشه جزيرة قطر`,
        english_gallery_description:`This gallery showcases the geological and biological 
        evolution of the Qatar Peninsula over the past 700 million years. 
        It highlights the major geological changes that shaped the land, alongside 
        reconstructions and fossils that bring to life the ancient environments and 
        prehistoric animals that once inhabited the region..`,
        arabic_gallery_description:`
        تستعرض هذه الصالة التطور
         الجيولوجي والبيولوجي لشبه جزيرة قطر على مدى 700 مليون سنة، حيث تسلط الضوء
         على التغيرات الجيولوجية الكبرى التي شكّلت الأرض، إلى جانب عرض بيئات قديمة من خلال
         حفريات ومجسمات تجسد الحيوانات التي عاشت في المنطقة في عصور ما قبل التاريخ.
        `
    },
    {
        id:`Gallery 2`,
        english_gallery_title: `Qatar’s Natural Environments `,
        english_gallery_description:`This gallery takes visitors on a journey to discover the natural 
        history of Qatar, highlighting the country’s rich environmental diversity. It showcases 
        a wide range of native wildlife, including terrestrial and marine animals, insects, and birds, 
        while also exploring themes of conservation and the remarkable ways in which species adapt to 
        their natural surroundings.`
    },
    {
        id:`Gallery 3`,
        english_gallery_title: `The Archaeology of Qatar`,
        english_gallery_description:`This gallery presents the chronological story of the early inhabitants 
        of the Qatar Peninsula through archaeological artifacts and inscriptions. It highlights two of Qatar’s 
        most important archaeological sites, Al Khor and Murwab, showcased as detailed models brought to life 
        with projections illustrating the evolution of each site and the significance of their key discoveries. 
        Complementing this, a series of striking displays features core artifacts dating back over 10,000 years, 
        from stone tools and simple pottery to fine metal objects and exquisite ceramics, revealing the region’s 
        rich cultural heritage and the development of its ancient communities.`
    },
    {
        id:`Gallery 4`,
        english_gallery_title: `The People of Qatar`,
        english_gallery_description:`This gallery tells the story of Qatar’s people from the 18th century to the mid-20th 
        century, highlighting how the dual land-and-sea environment shaped their identity, traditions, daily life, and creative 
        skills. It explores key themes including land and sea navigation, transportation and animals, trade and international 
        relations, as well as water and plant resources that supported their way of life.`
    }
]
const galleries = {
        'intro': {
        id: 'R8-1',
        scenes: ['intro'],
        image: './images/floormaps/entry.png'
    },
    'Gallery1': {
        id: 'R1',
        scenes: ['Gallery1', 'Gallery1-2'],
        image: '../images/floormaps/G1.png'
    },
    'Gallery2': {
        id: 'R2',
        scenes: ['Gallery2', 'Gallery2-1', 'Gallery2-2'],
        image: '../images/floormaps/G2.png'
    },
    'Gallery3': {
        id: 'R3',
        scenes: ['Gallery3', 'Gallery3-1', 'Gallery3-2', 'Gallery3-3', 'Gallery3-4'],
        image: '../images/floormaps/G3.png'
    },
    'Gallery4': {
        id: 'R4',
        scenes: ['Gallery4', 'Gallery4-1', 'Gallery4-2'],
        image: '../images/floormaps/G4.png'
    },
    'Gallery5': {
        id: 'R5',
        scenes: ['Gallery5', 'Gallery5-1', 'Gallery5-2', 'Gallery5-3'],
        image: '../images/floormaps/G5.png'
    },
    'Gallery6': {
        id: 'R6',
        scenes: ['Gallery6', 'Gallery6-1', 'Gallery6-2', 'Gallery6-3'],
        image: '../images/floormaps/G6.png'
    },
    'Gallery7': {
        id: 'R7',
        scenes: ['Gallery7', 'Gallery7-1', 'Gallery7-2', 'Gallery7-3'],
        image: '../images/floormaps/G7.png'
    },
    'Gallery8': {
        id: 'R8',
        scenes: ['Gallery8', 'Gallery8-1', 'Gallery8-2', 'Gallery8-3'],
        image: '../images/floormaps/G8.png'
    },
    'Gallery9': {
        id: 'R9',
        scenes: ['Gallery9', 'Gallery9-1', 'Gallery9-2', 'Gallery9-3'],
        image: '../images/floormaps/G9.png'
    },
    'Gallery10': {
        id: 'R10',
        scenes: ['Gallery10', 'Gallery10-1', 'Gallery10-2', 'Gallery10-3'],
        image: '../images/floormaps/G10.png'
    },
    'Gallery11': {
        id: 'R11',
        scenes: ['Gallery11'],
        image: '../images/floormaps/G11.png'
    }
};
// PLAY AUDIO ON SCENE LOAD START 
function startTour() {
    if (!krpanoInterface) {
        console.warn("krpano not ready yet!");
        return;
    }
    krpanoInterface.call("playaudio();");
}
function showPopupById(id) {
    const entry = popupData.find(item => item.id === id);
    if (!entry) return;

    $(".left-section h4").text(entry.title);
    $(".left-section .description").text(entry.description);
    $(".right-section img").attr("src", entry.image);
    $(".vtpopup").fadeIn().addClass("animateItems");
}
let galleryInfoClosed = false; // global flag
function showgallDetails(id, forceOpen = false) {
     $(".galleryDetails").addClass("active");
    // detect language from URL
    const url = window.location.href;
    let lang = "en"; // default
    if (url.includes("/ar")) {
        lang = "ar";
    }

    // find entry
    const entry = GalleryDesctiption.find(item => item.id.toLowerCase() === id.toLowerCase());

    if (!entry) {
        $(".galleryInfo").fadeOut();
        $(".galleryDetails").removeClass("active");
        return;
    }

    // If user closed it, don't auto-open unless forced
    if (galleryInfoClosed && !forceOpen) {
        $(".galleryDetails").removeClass("active").removeClass("moveCenter");
        return;
    }

    // If opened via button, reset closed state
    if (forceOpen) {
        galleryInfoClosed = false;
    }

    // pick the correct language fields
    const title = lang === "ar" ? (entry.arabic_gallery_title || entry.english_gallery_title)
                                : entry.english_gallery_title;
    const description = lang === "ar" ? (entry.arabic_gallery_description || entry.english_gallery_description)
                                      : entry.english_gallery_description;

    // update UI
    $(".modal-header .galleryTitle").text(title);
    $(".modal-body .galleryDescription").text(description);

    // set text direction for Arabic
    if (lang === "ar") {
        $(".modal-body .galleryDescription").attr("dir", "rtl");
        $(".modal-header .galleryTitle").attr("dir", "rtl");
    } else {
        $(".modal-body .galleryDescription").attr("dir", "ltr");
        $(".modal-header .galleryTitle").attr("dir", "ltr");
    }

    $(".galleryInfo").fadeIn();
}
// When the user clicks the close button inside .galleryInfo
$(".galleryInfo").on("click", ".close", function () {
    const $modal = $(this).closest(".galleryInfo");

    $modal.removeClass("active").fadeOut(400, function () {
        // this callback runs after fadeOut is complete
        $modal.removeClass("moveCenter");
    });
    $(".galleryDetails").removeClass("active");
    galleryInfoClosed = true;
});

$(".infoHotspot").click(function(){
     const $modal = $(this).closest(".galleryInfo");

    $modal.removeClass("active").fadeOut(400, function () {
        // this callback runs after fadeOut is complete
        $modal.removeClass("moveCenter");
    });
    $(".galleryDetails").removeClass("active");
    galleryInfoClosed = true;
})
function initGalleryNavigation() {
  // Wait until krpanoInterface is ready
  if (!window.krpanoInterface) {
    console.warn("[GalleryNav] krpanoInterface not ready, retrying...");
    setTimeout(initGalleryNavigation, 500);
    return;
  }

  // Helper: update active state
  function setActiveByScene(sceneName) {
    let matchedGallery = null;

    // find which gallery contains this scene
    Object.keys(galleries).forEach(galleryName => {
      const gallery = galleries[galleryName];
      if (gallery.scenes.includes(sceneName)) {
        matchedGallery = gallery;
      }
    });

    if (matchedGallery) {
      document.querySelectorAll('.Room').forEach(room => {
        room.classList.remove('active');
      });
      const el = document.getElementById(matchedGallery.id);
      if (el) el.classList.add('active');
      if (matchedGallery && matchedGallery.image) {
        transitionMapImage(matchedGallery.image);
    }
    }
  }

  // 1) Register click listeners for each gallery
  Object.keys(galleries).forEach(galleryName => {
    const gallery = galleries[galleryName];
    const el = document.getElementById(gallery.id);

    if (el) {
      // prevent duplicate listeners
      el.replaceWith(el.cloneNode(true));
      const newEl = document.getElementById(gallery.id);

      newEl.addEventListener("click", () => {
        const firstScene = gallery.scenes[0];
        console.log(`[GalleryNav] Clicked ${gallery.id} → loadscene(${firstScene})`);

        // Load scene in krpano
        krpanoInterface.call(`loadscene(${firstScene}, null, MERGE, BLEND(1));`);

        // Show gallery details popup
        showgallDetails(galleryName, true);

        // Update active state
        setActiveByScene(firstScene);
      });
    } else {
      console.warn(`[GalleryNav] Element not found for gallery ${galleryName} (id=${gallery.id})`);
    }
  });

  // 2) Hook into krpano event when scene changes
  krpanoInterface.set("events[galleryNavEvents].onnewscene", "js(updateActiveFromKrpano());");

  // Expose a global JS function that krpano can call
  window.updateActiveFromKrpano = function () {
    const currentScene = krpanoInterface.get("xml.scene");
    console.log("[GalleryNav] Scene changed →", currentScene);
    setActiveByScene(currentScene);
  };

  // 3) Initial check (highlight the current scene right away)
  const initialScene = krpanoInterface.get("xml.scene");
  if (initialScene) {
    setActiveByScene(initialScene);
  }
}




$(document).ready(function () {
    $(".closemapContainer").click(function(){
        $(".mapContainerPopup").fadeOut();
    })
    // Debug SVG load status
    const checkSvg = setInterval(() => {
        const svg = document.querySelector('#svg-map');
        if (svg) {
            clearInterval(checkSvg);
            console.log("[SVG] Found in DOM, rooms:",
                Array.from(document.querySelectorAll('.Room')).map(r => r.id));
        }
    }, 100);

    embedpano({
        xml: "./tour.xml",
        target: "pano",
        onready: function (krpano) {
     

            // ✅ Save globally
            krpanoInterface = krpano;

            initializeSceneHandling();
            initGalleryNavigation();
            setTimeout(() => {
              
                UpdateActiveRoomFromScene('intro');
            }, 1000);
        }
    });

});
// =============================================
// CORE FUNCTIONALITY
// =============================================
let currentGallery = null;
// let showingImageIndex = 1;
function initializeSceneHandling() {
    // Set up krpano event listeners
    const krpano = document.getElementById("krpanoSWFObject");
    if (krpano && krpano.set) {
        krpano.set("events.onnewscene", "js(handleSceneChange(get(xml.scene)));");
    }

    // Initialize hotspot attributes
    waitForKrpano(injectLinkedSceneAttribute);
}

function handleSceneChange(sceneName) {
    // console.log(`[SCENE] Changed to: ${sceneName}`);
    UpdateActiveRoomFromScene(sceneName);
}

function getGalleryByScene(sceneName) {
    const normalizedScene = sceneName.trim();
    console.log(`[LOOKUP] Finding gallery for scene: "${normalizedScene}"`);

    for (const galleryName in galleries) {
        if (galleries[galleryName].scenes.includes(normalizedScene)) {
            console.log(`[MATCH] Found gallery: "${galleryName}"`);
            return galleryName;
        }
    }

    console.warn(`[WARNING] No gallery found for scene: "${normalizedScene}"`);
    return null;
}

function UpdateActiveRoomFromScene(sceneName) {
    console.group(`[UPDATE] Room update for scene: ${sceneName}`);

    const galleryName = getGalleryByScene(sceneName);
    const isNewGallery = galleryName && galleryName !== currentGallery;

    // Handle gallery image transition if needed
    if (isNewGallery) {
        console.log(`[GALLERY] Changing to: ${galleryName}`);
        currentGallery = galleryName;
        transitionMapImage(galleries[galleryName].image);

        // Update customThumb class
        updateCustomThumbClass(galleryName);
    }

    // Update room highlighting
    highlightActiveRoom(sceneName);

    console.groupEnd();
}

function updateCustomThumbClass(galleryName) {
    const customThumb = document.querySelector('.customThumb');
    if (!customThumb) {
        console.warn('[WARNING] customThumb element not found');
        return;
    }

    // Remove all existing gallery classes
    const galleryClasses = Object.keys(galleries).map(g => `gallery${g.replace('Gallery', '')}`);
    customThumb.classList.remove(...galleryClasses);

    // Add new gallery class if valid
    if (galleryName) {
        const galleryNumber = galleryName.replace('Gallery', '');
        const newClass = `gallery${galleryNumber}`;
        customThumb.classList.add(newClass);
        console.log(`[CUSTOMTHUMB] Added class: ${newClass}`);
    }
}

let showingImageIndex = 1; // start with #map-image-1 visible

// FIXED: transitionMapImage function
function transitionMapImage(newSrc) {
    // If it's the same image, don't do anything
    if (newSrc === currentImageSrc) {
        return;
    }
    
    console.log(`[IMAGE] Transitioning to: ${newSrc}`);
    currentImageSrc = newSrc;

    const currentImg = document.getElementById(`map-image-${showingImageIndex}`);
    const nextImgIndex = showingImageIndex === 1 ? 2 : 1;
    const nextImg = document.getElementById(`map-image-${nextImgIndex}`);

    if (!currentImg || !nextImg) {
        console.error("[ERROR] Map image elements not found");
        return;
    }

    // Preload the next image before transition
    nextImg.onload = () => {
        nextImg.classList.add('visible');
        currentImg.classList.remove('visible');
        showingImageIndex = nextImgIndex;
    };

    nextImg.src = newSrc;
}


function highlightActiveRoom(sceneName) {
    console.log(`[HIGHLIGHT] Updating active room for: ${sceneName}`);

    // Clear previous active rooms
    document.querySelectorAll('.mapContainerPopup svg g.Room').forEach(room => {
        room.classList.remove('active', 'clicked');
    });

    // Find and highlight new active room
    const galleryName = getGalleryByScene(sceneName);
    if (galleryName && galleries[galleryName]) {
        const roomId = galleries[galleryName].id;
        // Simplified selector - remove .mapContainerPopup if not needed
        const roomSelector = `#${roomId}`;
        const roomElement = document.querySelector(roomSelector);

        if (roomElement) {
            roomElement.classList.add('active', 'clicked');
            console.log(`[SUCCESS] Highlighted room: ${roomId}`);
            centerActiveRoom();
        } else {
            console.error(`[ERROR] Room element not found with selector: ${roomSelector}`);
            // Debug: Log all room elements to see what's available
            console.log('Available room elements:', document.querySelectorAll('.Room'));
        }
    } else {
        console.warn(`[WARNING] No gallery configuration for scene: ${sceneName}`);
    }
}

function centerActiveRoom() {
    const container = document.querySelector('.map-container');
    const svg = document.getElementById('svg-map');
    const activeRoom = svg?.querySelector('.Room.active');

    if (!activeRoom || !svg || !container) {
        console.error("[ERROR] Elements missing for centering");
        return;
    }

    // Calculate container and room dimensions
    const containerRect = container.getBoundingClientRect();
    const viewBox = svg.getAttribute('viewBox').split(' ').map(Number);
    const roomBox = activeRoom.getBBox();
    const scale = 2.3;

    // Calculate room center
    const roomCenterX = roomBox.x + roomBox.width / 2;
    const roomCenterY = roomBox.y + roomBox.height / 2;

    // Calculate translation
    let translateX = containerRect.width / 2 - roomCenterX * scale;
    let translateY = containerRect.height / 2 - roomCenterY * scale;

    // Apply constraints
    const minTranslateX = containerRect.width - viewBox[2] * scale;
    const minTranslateY = containerRect.height - viewBox[3] * scale;
    translateX = Math.min(Math.max(translateX, minTranslateX), 0);
    translateY = Math.min(Math.max(translateY, minTranslateY), 0);

    // Apply transformation
    svg.style.transformOrigin = '0 0';
    svg.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;

    // console.log(`[CENTER] Centered room with scale: ${scale}`);
}

// =============================================
// KRPANO INTEGRATION
// =============================================
function waitForKrpano(callback) {
    const interval = setInterval(() => {
        const krpano = document.getElementById("krpanoSWFObject");
        if (krpano && krpano.get && krpano.get("xml.loaded") === true) {
            clearInterval(interval);
            callback(krpano);
        }
    }, 100);
}

function injectLinkedSceneAttribute() {
    const krpano = document.getElementById("krpanoSWFObject");
    if (!krpano || !krpano.get) return;

    const count = parseInt(krpano.get("hotspot.count"), 10);
    for (let i = 0; i < count; i++) {
        const hsName = krpano.get(`hotspot[${i}].name`);
        const hsDiv = krpano.get(`hotspot[${hsName}].div`);
        if (!hsDiv) continue;

        const linkedScene = krpano.get(`hotspot[${hsName}].linkedscene`);
        if (linkedScene && !hsDiv.hasAttribute("data-linkedscene")) {
            hsDiv.setAttribute("data-linkedscene", linkedScene);
            hsDiv.setAttribute("title", linkedScene);
        }
    }

    // console.log("[KRPANO] Injected linked scene attributes to hotspots");
}

// =============================================
// UI FUNCTIONS
// =============================================
function openVTPopup() {
    $('.vtpopup').fadeIn();
    $('.overlay').fadeIn();
}

function closeVTPopup() {
    $('.vtpopup').fadeOut();
    $('.overlay').fadeOut();
}

function toggleMapContainer() {
    $('.map-container').fadeToggle();
}

// UI Event Bindings
$(document).on("click", ".closePopup", closeVTPopup);
$(document).on("click", ".overlay", closeVTPopup);
$(document).on("click", ".fullScreenStyle", function () {
    $(this).toggleClass("active");
});
$(".galleryDetails").click(function(){
    $(this).addClass("active");
})
$(document).on("click", ".navContainer2 .expandNavigation", function () {
    $(this).toggleClass("active");
    $(".navContainer2").toggleClass("active");
    $(".hide-button, .fullScreenStyle, .playSound").toggleClass("moveRight");
});
$(document).on("click", ".customThumb", function () {
    $(".navContainer1, .navContainer2, .navContainer3").toggleClass("moveTop");
    $(this).toggleClass("moveTop");
    $(".thumbsStyleContainer").addClass("active");
});
$(document).on("click", ".playSound", function () {
    $(this).toggleClass("active");
});
$('.galleryInfo .modal-footer button').click(function(){
    $(".galleryInfo").addClass("moveCenter");
})
