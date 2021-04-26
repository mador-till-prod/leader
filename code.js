// const NUM_OF_LEADERS = 15;
// // reaction function
// const NUM_OF_EXPLOSION_STAGES = 6;
// const arrLeaders = [{
//     "name": "מארי קירי",
//     "act": "דמות מדענית פורצת גבולות, חלוצה בחקר הקרינה הרדיואקטיבית."
//   },
//   {
//     "name": "אילון מאסק",
//     "act": "דמות מנהיגה פורצת דרך בתחום הטכנולוגיה והחלל."
//   },
//   {
//     "name": "חנה סנש",
//     "act": "דמות לוחמת ומשוררת יהודייה, מצנחני היישוב, שהייתה לסמל של אידיאליזם והקרבה עצמית."
//   },
//   {
//     "name": "עדי אלטשולר",
//     "act": 'דמות מנהיגה, אשת חינוך ויזמית חברתית. מייסדת תנועת "כנפיים של קרמבו" (תנועת נוער לצעירים עם ובלי צרכים מיוחדים).'
//   },
//   {
//     "name": "הרב קוק",
//     "act": 'דמות שהייתה הרב הראשי האשכנזי הראשון בארץ ישראל, ונחשבת לאחת מאבות הציונות הדתית.'
//   },
//   {
//     "name": "יהודה המכבי",
//     "act": "דמות מצביאה ומנהיגה יהודית שעמדה בראש מרד החשמונאים."
//   },
//   {
//     "name": "סטף ורטהיימר",
//     "act": "דמות תעשיינית ישראלית שייסדה מפעלים מובילים בארץ ובעולם, זוכת פרס ישראל וחברת הכנסת התשיעית מטעם התנועה הדמוקרטית לשינוי."
//   },
//   {
//     "name": 'ד"ר דני גולד',
//     "act": 'דמות ששימשה כראש המנהל למחקר, פיתוח אמצעי לחימה ותשתית טכנולוגית, ותת אלוף במילואים בצה"ל.'
//   },
//   {
//     "name": "אהוד שבתאי",
//     "act": 'דמות מייסדת מרכזית של אפליקציית "ווייז", אשר הציבה את ישראל במקום של כבוד לצד מפתחי אפליקציות מובילות בקנה מידה עולמי.'
//   },
//   {
//     "name": "מלאלה יוספזאי",
//     "act": "דמות מנהיגה חברתית אשר לחמה למען זכויות נערות מהעיר מינגורה בפקיסטן."
//   },
//   {
//     "name": "אירנה סנדלר",
//     "act": "דמות חסידת אומות עולם שהצילה 2500 ילדים יהודים במהלך השואה תוך סיכון חייה. עובדת סוציאלית וחברת מחתרת, שהתנגדה לנאצים בזמן מלחמת העולם השנייה."
//   },
//   {
//     "name": "אליס מילר",
//     "act": 'דמות שנאבקה למען פתיחת קורס הטיס בצה"ל לנשים באמצעות עתירה לבג"ץ.'
//   },
//   {
//     "name": "רועי קליין",
//     "act": `דמות שהייתה קצינה בצה"ל, ונהרגה בקרב בינת ג'בייל במלחמת לבנון השנייה לאחר שזינקה על רימון יד כדי להציל את חיי חייליה.`
//   },
//   {
//     "name": "יעל ארד",
//     "act": "דמות מנהיגה בתחום הספורט אשר נחשבת לאחת מהטובות ביותר בכל הזמנים."
//   },
//   {
//     "name": "הנרייטה סאלד",
//     "act": "דמות פעילת ציבור, אשת חינוך ועורכת ספרותית, שהקדישה את חייה ופועלה לרעיון הציוני ולעם היהודי"
//   }
// ];
// var selectedcomponent = null;
// var selectedleader = null;
// var ending = 0;
// var src = ["assets/media/leader-answer/leader_", "assets/media/leader-answer/leader_selected_", "assets/media/info-answer/info_", "assets/media/info-answer/info_selected_","assets/media/marker/marker_"];
// var audio = new Audio("assets/media/audio/cut/start.mp3");
// var generalImages = ["assets/media/vial/vial_right.svg", "assets/media/vial/vial_wrong.svg", "assets/media/vial/vial.svg", "assets/media/general/about.svg", "assets/media/general/back_arrow.svg", "assets/media/general/cabinet_left.svg", "assets/media/general/cabinet_right.svg", "assets/media/general/notebook-button.svg", "assets/media/general/notebook.svg", "assets/media/general/scientist-start.svg", "assets/media/general/scientist-end.svg", "assets/media/general/SpeechBubble.svg", "assets/media/general/desk.svg", "assets/media/general/shelf.svg", "assets/media/general/play.svg"];
// var loadAudio = ["assets/media/audio/cut/start.mp3", "assets/media/audio/cut/end.mp3", "assets/media/audio/cut/right_1.mp3", "assets/media/audio/cut/right_2.mp3", "assets/media/audio/cut/right_3.mp3", "assets/media/audio/cut/wrong_1.mp3", "assets/media/audio/cut/wrong_2.mp3", "assets/media/audio/cut/wrong_3.mp3"];

// $(function() {
//   // for (let i = 1; i <= NUM_OF_LEADERS; i++) {
//   //   for (let j = 1; j <= src.length; j++) {
//   //     // loadingMedia(src[j-1] + i + ".svg");
//   //     $("#preload").append("<img src='"+src[j-1] + i + ".svg'>");
//   //   }
//   // }
//   init();
// });

// // async function loadingMedia(url) {
// //   let graphics = new Image();
// //   return new Promise(function(resolve, reject){
// //     graphics.src = url;
// //     graphics.onload= function(){
// //       resolve(url)
// //     }
// //     graphics.onerror= function(){
// //       reject(url)
// //     }
// //   })
// // }

// // const loadingMedia = (url) => new Promise((resolve, reject) => {
// // const  graphics = new Image();
// // graphics.addEventListener("load", () => resolve(graphics));
// // graphics.addEventListener("error", (err) => reject(err));
// // graphics.src = url;
// // });
// // preload of media
// // function loadingMedia() {
// //   let sound = new Audio();
// //   for (let i = 1; i <= NUM_OF_LEADERS; i++) {
// //     for (let j = 1; j <= src.length; j++) {
// //       let graphics = new Image();
// //       graphics.src = src[j-1] + i + ".svg";
// //     }
// //     // graphics.src = generalImages[i - 1];
// //   }
// //   for (let i = 1; i <= loadAudio.length; i++) {
// //     sound.src = loadAudio[i - 1];
// //   }
// //   init();
// // }

// function init() {
//   // loading names and acts
//   for (let i = 0; i < NUM_OF_LEADERS; i++) {
//     // names
//     // the graphics is the background of the div
//     $("#names-flexbox").append(`<img id="leader-${i+1}" data-num=${i+1} class="leaders" src="assets/media/leader-answer/leader_${i+1}.svg">`);
//     // $(`#name-${i+1}`).attr("src", `assets/media/leaders/leader_${i+1}.svg`);
//     // acts
//     // adding internal text div to the HTML div
//     $(`#act-${i+1}`).append(`<div class="act-text">${arrLeaders[i].act}</div>`);
//     //adding components graphics
//     $(`#act-${i+1}`).append(`<img id="component-${i+1}" data-num=${i+1} class="components" src="assets/media/info-answer/info_${i+1}.svg">`);
//   }
//   // event listeners
//   // start
//   $("#play-button").on("click", function() {
//     scientistOut();
//     setTimeout(toggleBlackOpacityDiv, 1100);
//     setTimeout(function() {
//       $("#opening-ending-container").css("display", "none");
//     }, 1100);
//     $("#notebook-scrollbar").html("");
//     audio.pause();
//   });
//   $("#about").on("click", function() {
//     scientistOut();
//     $("#notebook-container").css("display", "flex");
//     $("#notebook-container").animate({
//       bottom: "142vw"
//     }, 300);
//     $("#notebook-scrollbar").html(`<div id="about-title">אודות</div><div id="about-content">רמ"ד טי"ל: רס"ן מיגל לויתן<br>רת"ח פרוייקטים: רס"ר שלומי אוגרן<br>רת"ח מו"פ וחדשנות בלמידה: סמ"ר גל גנסין<br><br>תכנות: טור' טל סרוסי<br>עיצוב גרפי: רב"ט מייה ליבנה<br><br>מומחה התוכן: סגן שחף שוחט<br><br>גרסה: 1.0.2021</div><img id="till-symbol" class="symbol" src="assets/media/symbols/tilblack.svg"><img id="school-symbol" class="symbol" src="assets/media/symbols/סמל בית הספר הכשם.png">`);
//     audio.pause();
//     audio.currentTime = 0;
//   });
//   // game
//   $(".acts").on("click", function() {
//     selected($("#component-" + $(this).attr("id").slice(4)), "info", "component");
//   });
//   $(".leaders").on("click", function() {
//     selected($(this), "leader", "leader");
//   });
//   $("#notebook-button").on("click", function() {
//     $("#notebook-container").css("display", "flex");
//     $("#notebook-container").animate({
//       bottom: "142vw"
//     }, 300);
//     toggleBlackOpacityDiv();
//   });
//   $("#back-button").on("click", function() {
//     // if the content is "about", the screen returns to the opening screen
//     if ($("#about-title").text() === "אודות") {
//       start();
//       scientistInAbout()
//     } else {
//       toggleBlackOpacityDiv();
//     }
//     $("#notebook-container").animate({
//       bottom: "2vw"
//     }, 300).promise().then(function() {
//       $("#notebook-container").css("display", "none");
//       // toggleBlackOpacityDiv();
//     });
//   });
//   // $(".components").click(function() {
//   //   $(`#component-${selectedcomponent}`).attr("src", `assets/media/info-answer/info_${selectedcomponent}.svg`);
//   //   if (selectedcomponent !== $(this).attr("id").slice(10)) {
//   //     selectedcomponent = $(this).attr("id").slice(10);
//   //     $(this).attr("src", `assets/media/info-answer/info_selected_${selectedcomponent}.svg`);
//   //     if ($("#vial").attr("src") === "assets/media/vial/vial.svg") {
//   //       $("#vial").attr("src", `assets/media/vial/info_vial_${selectedcomponent}.svg`);
//   //     } else {

//   //     }
//   //   }
//   //   // canceling double clicked component mark
//   //   else {
//   //     $(this).attr("src", `assets/media/info-answer/info_${selectedcomponent}.svg`);
//   //     selectedcomponent = null;
//   //     $("#vial").attr("src", "assets/media/vial/vial.svg");
//   //   }
//   // })

//   scientistInStart();
// }

// function start() {
//   setTimeout(function() {
//     $("#speech-bubble").delay(700).animate({
//       opacity: "10"
//     }, 1500);
//     $("#play-button").delay(800).animate({
//       opacity: "10"
//     }, 1500);
//     $("#about").delay(900).animate({
//       opacity: "10"
//     }, 1500);
//   }, 500);
//   if ($("#scientist").attr("src") === "assets/media/general/scientist-start.svg") {
//     audio.play();
//   }
// }

// function scientistInStart() {
//   setTimeout(function() {
//     $("#scientist").animate({
//       top: "50vw"
//     }, 200).animate({
//       top: "20vw"
//     }, 200).animate({
//       top: "30vw"
//     }, 200).delay(200).animate({
//       height: "71vw",
//       top: "27vw"
//     }, 200).animate({
//       height: "67vw",
//       top: "30vw"
//     }, 200);
//   }, 800);
//   $("#scientist").on("click", function() {
//     $("#scientist").off("click");
//     start();
//     $("#scientist").animate({
//       top: "0vw"
//     }, 500)
//   });
// }

// function scientistInAbout() {
//   setTimeout(function() {
//     $("#scientist").animate({
//       top: "20vw"
//     }, 200).animate({
//       top: "-10vw"
//     }, 200).animate({
//       top: "0vw"
//     }, 200);
//   }, 800);
// }

// function scientistOut() {
//   $("#scientist").animate({
//     top: "-77vw"
//   }, 400)
//   $("#speech-bubble").animate({
//     opacity: "0"
//   }, 500);
//   $("#play-button").animate({
//     opacity: "0"
//   }, 500);
//   $("#about").animate({
//     opacity: "0"
//   }, 500);
// }

// function selected(clickedItem, imgName, itemType) {
//   // the last item shall be empty
//   $("#" + itemType + "-" + window[`selected${itemType}`]).attr("src", "assets/media/" + imgName + "-answer/" + imgName + "_" + window[`selected${itemType}`] + ".svg");
//   // if the last item is not the current item
//   if (window[`selected${itemType}`] !== clickedItem.attr("data-num")) {
//     // the variable changes to the new item's number
//     window[`selected${itemType}`] = clickedItem.attr("data-num");
//     // the item is selected
//     clickedItem.attr("src", "assets/media/" + imgName + "-answer/" + imgName + "_selected_" + window[`selected${itemType}`] + ".svg");
//     // if the vial is empty, it is switched to new picture with the new item
//     if (($("#vial").css("background-image").includes("assets/media/vial/vial.svg"))) {
//       $("#vial").css("background-image", "url(assets/media/vial/" + imgName + "_vial_" + window[`selected${itemType}`] + ".svg)");
//     }
//     // if the vial is including another item's picture, it is switched to new picture with the new item
//     else if ($("#vial").css("background-image").includes(imgName)) {
//       $("#vial").css("background-image", "url(assets/media/vial/" + imgName + "_vial_" + window[`selected${itemType}`] + ".svg)");
//     } else {
//       if (selectedcomponent === selectedleader) {
//         reaction("right");
//         // $("#vial").css("background-image", "url(assets/media/vial/vial_right.svg)");
//       } else {
//         reaction("wrong");
//       }
//     }
//   }
//   // canceling double clicked component mark
//   else {
//     clickedItem.attr("src", "assets/media/" + imgName + "-answer/" + imgName + "_" + window[`selected${itemType}`] + ".svg");
//     window[`selected${itemType}`] = null;
//     $("#vial").css("background-image", "url(assets/media/vial/vial.svg)");
//   }
// }

// function reaction(reactionKind) {
//   let effect;
//   if (reactionKind === "right") {
//     effect = "cloud";
//     // appending leader to the notebook
//     $("#notebook-scrollbar").append("<div id='marked-name-" + selectedleader + "' class='marked-name'>" + arrLeaders[selectedleader - 1].name + "</div><div id='marked-text-" + selectedcomponent + "' class='marked-text'>" + arrLeaders[selectedcomponent - 1].act + "</div>");
//     $("#marked-name-" + selectedleader).css("background-image", "url(assets/media/marker/marker_" + selectedleader + ".svg)");
//     $("#cloud1").css({
//       "visibility": "hidden",
//       "display": "block"
//     });
//     $("#explosion1").css({
//       "visibility": "visible",
//       "display": "none"
//     });
//     // determin scientist reaction
//     audio = new Audio("assets/media/audio/cut/right_" + Math.floor(Math.random() * 3 + 1) + ".mp3");

//   } else {
//     effect = "explosion";
//     $("#explosion1").css({
//       "visibility": "hidden",
//       "display": "block"
//     });
//     $("#cloud1").css({
//       "visibility": "visible",
//       "display": "none"
//     });
//     // determin scientist reaction
//     audio = new Audio("assets/media/audio/cut/wrong_" + Math.floor(Math.random() * 3 + 1) + ".mp3");
//   }
//   // scientist voice
//   audio.play();
//   for (let i = 1; i <= NUM_OF_EXPLOSION_STAGES; i++) {
//     // explosion appears
//     setTimeout(function() {
//       $("#" + effect + i).css("display", "block");
//       if (i === 1) {
//         $("#" + effect + 1).css("visibility", "visible");
//       }
//     }, i * (100));
//     // explosion disappears
//     setTimeout(function() {
//       $("#" + effect + i).css("display", "none");
//       if (i === 1) {
//         $("#" + effect + i).css("visibility", "hidden");
//       }
//       if (i === NUM_OF_EXPLOSION_STAGES) {
//         $("#" + effect + 1).css("display", "block");
//       }
//     }, i * (100) + 100);
//   }
//   // changing vial liquid
//   setTimeout(function() {
//     $("#vial").css("background-image", "url(assets/media/vial/vial_" + reactionKind + ".svg)");
//   }, 500);

//   // removing event listeners
//   $(".acts").off("click");
//   $(".leaders").off("click");

//   setTimeout(function() {
//     if (reactionKind === "right") {
//       // removing right answers
//       $("#act-" + selectedcomponent).fadeOut();
//       $("#leader-" + selectedleader).fadeOut();

//       ending++;
//       if (ending === NUM_OF_LEADERS) {
//         $("#notebook-button").off("click");
//         $("#play-button").off("click");
//         $("#play-button").on("click", function() {
//           window.location.href = "https://youtube.com/shorts/w93f45UhEpg?feature=share";
//         });
//         setTimeout(function() {
//           toggleBlackOpacityDiv();
//           $("#opening-ending-container").css("display", "block");
//           $("#about").css("display", "none");
//           $("#scientist").attr("src", "assets/media/general/scientist-end.svg");
//           audio = new Audio("assets/media/audio/cut/end.mp3");
//           audio.play();
//           start();
//           scientistInAbout();
//           $("#play-button").css({
//             "top": "-30vw",
//             "width": "20%",
//             "left": "38vw"
//           })
//           $("#speech-bubble").html(`עזרתם לי להכין את כל התרופות!<br><span id="great-job-span">עבודה מעולה!</span><br><br>בואו נמשיך הלאה`);

//         }, 1500);
//       }
//     } else {
//       // removing item's glow
//       $("#component-" + selectedcomponent).attr("src", "assets/media/info-answer/info_" + selectedcomponent + ".svg");
//       $("#leader-" + selectedleader).attr("src", "assets/media/leader-answer/leader_" + selectedleader + ".svg");

//     }

//     selectedcomponent = null;
//     selectedleader = null;
//     // clearing vial
//     $("#vial").css("background-image", "url(assets/media/vial/vial.svg)");
//     // adding again event listeners
//     $(".acts").on("click", function() {
//       selected($("#component-" + $(this).attr("id").slice(4)), "info", "component");
//     });
//     $(".leaders").on("click", function() {
//       selected($(this), "leader", "leader");
//     });
//   }, 1500);
// }

// function toggleBlackOpacityDiv() {
//   $("#black-opacity").fadeToggle();
// }


const NUM_OF_LEADERS = 15;
// reaction function
const NUM_OF_EXPLOSION_STAGES = 6;
const arrLeaders = [{
    "name": "מארי קירי",
    "act": "דמות מדענית פורצת גבולות, חלוצה בחקר הקרינה הרדיואקטיבית."
  },
  {
    "name": "אילון מאסק",
    "act": "דמות מנהיגה פורצת דרך בתחום הטכנולוגיה והחלל."
  },
  {
    "name": "חנה סנש",
    "act": "דמות לוחמת ומשוררת יהודייה, מצנחני היישוב, שהייתה לסמל של אידיאליזם והקרבה עצמית."
  },
  {
    "name": "עדי אלטשולר",
    "act": 'דמות מנהיגה, אשת חינוך ויזמית חברתית. מייסדת תנועת "כנפיים של קרמבו" (תנועת נוער לצעירים עם ובלי צרכים מיוחדים).'
  },
  {
    "name": "הרב קוק",
    "act": 'דמות שהייתה הרב הראשי האשכנזי הראשון בארץ ישראל, ונחשבת לאחת מאבות הציונות הדתית.'
  },
  {
    "name": "יהודה המכבי",
    "act": "דמות מצביאה ומנהיגה יהודית שעמדה בראש מרד החשמונאים."
  },
  {
    "name": "סטף ורטהיימר",
    "act": "דמות תעשיינית ישראלית שייסדה מפעלים מובילים בארץ ובעולם, זוכת פרס ישראל וחברת הכנסת התשיעית מטעם התנועה הדמוקרטית לשינוי."
  },
  {
    "name": 'ד"ר דני גולד',
    "act": 'דמות ששימשה כראש המנהל למחקר, פיתוח אמצעי לחימה ותשתית טכנולוגית, ותת אלוף במילואים בצה"ל.'
  },
  {
    "name": "אהוד שבתאי",
    "act": 'דמות מייסדת מרכזית של אפליקציית "ווייז", אשר הציבה את ישראל במקום של כבוד לצד מפתחי אפליקציות מובילות בקנה מידה עולמי.'
  },
  {
    "name": "מלאלה יוספזאי",
    "act": "דמות מנהיגה חברתית אשר לחמה למען זכויות נערות מהעיר מינגורה בפקיסטן."
  },
  {
    "name": "אירנה סנדלר",
    "act": "דמות חסידת אומות עולם שהצילה 2500 ילדים יהודים במהלך השואה תוך סיכון חייה. עובדת סוציאלית וחברת מחתרת, שהתנגדה לנאצים בזמן מלחמת העולם השנייה."
  },
  {
    "name": "אליס מילר",
    "act": 'דמות שנאבקה למען פתיחת קורס הטיס בצה"ל לנשים באמצעות עתירה לבג"ץ.'
  },
  {
    "name": "רועי קליין",
    "act": `דמות שהייתה קצינה בצה"ל, ונהרגה בקרב בינת ג'בייל במלחמת לבנון השנייה לאחר שזינקה על רימון יד כדי להציל את חיי חייליה.`
  },
  {
    "name": "יעל ארד",
    "act": "דמות מנהיגה בתחום הספורט אשר נחשבת לאחת מהטובות ביותר בכל הזמנים."
  },
  {
    "name": "הנרייטה סאלד",
    "act": "דמות פעילת ציבור, אשת חינוך ועורכת ספרותית, שהקדישה את חייה ופועלה לרעיון הציוני ולעם היהודי"
  }
];
// const fs = requirejs('fs');

var selectedcomponent = null;
var selectedleader = null;
var ending = 0;
var src = ["assets/media/vial/info_vial_", "assets/media/leader-answer/leader_selected_", "assets/media/vial/leader_vial_", "assets/media/info-answer/info_selected_","assets/media/marker/marker_"];
var audio = new Audio("assets/media/audio/cut/start.mp3");
var generalImages = ["assets/media/vial/vial_right.svg", "assets/media/vial/vial_wrong.svg", "assets/media/vial/vial.svg", "assets/media/general/about.svg", "assets/media/general/back_arrow.svg", "assets/media/general/cabinet_left.svg", "assets/media/general/cabinet_right.svg", "assets/media/general/notebook-button.svg", "assets/media/general/notebook.svg", "assets/media/general/scientist-start.svg", "assets/media/general/scientist-end.svg", "assets/media/general/SpeechBubble.svg", "assets/media/general/desk.svg", "assets/media/general/shelf.svg", "assets/media/general/play.svg"];
var loadAudio = ["assets/media/audio/cut/start.mp3", "assets/media/audio/cut/end.mp3", "assets/media/audio/cut/right_1.mp3", "assets/media/audio/cut/right_2.mp3", "assets/media/audio/cut/right_3.mp3", "assets/media/audio/cut/wrong_1.mp3", "assets/media/audio/cut/wrong_2.mp3", "assets/media/audio/cut/wrong_3.mp3"];
// var queue = new createjs.LoadQueue(true);
// var queueAudio = new createjs.LoadQueue(true);
var arrManifest = [];
let mediaCache = 'userSettings';


$(function() {
  if ('serviceWorker' in navigator && location.hostname !== 'localhost' && location.hostname !== "127.0.0.1") {
    let location = ""
    navigator.serviceWorker.register(location + 'sw.js');
  }



  // // queue.on("fileload", function(){
  // //   if ((i > NUM_OF_LEADERS) && (j > src.length)) {
  // //     init();
  // //   }
  // // });
//   for (var i = 1; i <= NUM_OF_LEADERS; i++) {
//     for (var j = 1; j <= src.length; j++) {
//       // loadingMedia(src[j-1] + i + ".svg");
//       arrManifest.push(src[j-1] + i + ".svg");
//       // queue.loadFile(src[j-1] + i + ".svg");
//       // $("#preload").append("<img rel='preload' src='"+src[j-1] + i + ".svg'>");
//       // console.log(src[j-1] + i + ".svg,");
//     }
//   }
//   queue.loadManifest(arrManifest);
//   queueAudio.loadManifest(loadAudio);
//   caches.open(mediaCache).then(cache => {
//     cache.addAll(arrManifest).then(()=>{
//       console.log("data cached")
//     });
//     });
//   queue.on("complete", function(){
// console.log("gah");
//   });
//   queueAudio.on("complete", function(){
//     console.log("tal");
//   });
//
  // ספריית אופליין, מאפשרת פתיחה של הדף ללא אינטרנט וללא מחיקה של הקאש כל פעם מחדש

  init();
});

// async function loadingMedia(url) {
//   let graphics = new Image();
//   return new Promise(function(resolve, reject){
//     graphics.src = url;
//     graphics.onload= function(){
//       resolve(url)
//     }
//     graphics.onerror= function(){
//       reject(url)
//     }
//   })
// }

// $(function() {
//   loadingMedia();
// });

// // preload of media
// function loadingMedia() {
//   let graphics = new Image();
//   let sound = new Audio();
//   for (let i = 1; i <= NUM_OF_LEADERS; i++) {
//     graphics.src = "assets/media/cloud-right/cloud_" + i + ".svg";
//     graphics.src = "assets/media/explosion-wrong/explosion_" + i + ".svg";
//     graphics.src = "assets/media/info-answer/info_" + i + ".svg";
//     graphics.src = "assets/media/info-answer/info_selected_" + i + ".svg";
//     graphics.src = "assets/media/leader-answer/leader_" + i + ".svg";
//     graphics.src = "assets/media/leader-answer/leader_selected_" + i + ".svg";
//     graphics.src = "assets/media/marker/marker_" + i + ".svg";
//     graphics.src = "assets/media/vial/info_vial_" + i + ".svg";
//     graphics.src = "assets/media/vial/leader_vial_" + i + ".svg";
//     graphics.src = generalImages[i - 1];
//   }
//   for (let i = 1; i <= loadAudio.length; i++) {
//     sound.src = loadAudio[i - 1];
//   }
//   init();
// }

// function readFiles(dirname, onFileContent, onError) {
//   fs.readdir(dirname, function(err, filenames) {
//     if (err) {
//       onError(err);
//       return;
//     }
//     filenames.forEach(function(filename) {
//       fs.readFile(dirname + filename, 'utf-8', function(err, content) {
//         if (err) {
//           onError(err);
//           return;
//         }
//         onFileContent(filename, content);
//       });
//     });
//   });
// }

function init() {
  var folder = "assets/media/vial/";
//   $.ajax({
//     url : folder,
//     success: function (data) {
//         $(data).find("a").attr("href", function (i, val) {
//             if( val.match(/\.(jpe?g|png|svg)$/) ) { 
//                 $("body").append( "<img src='"+ folder + val +"'>" );
//                 console.log(val)
//             } 
//         });
//     }
// });
  var data = {
    img1: "assets/media/leader-answer/leader_1.svg",
    img2:"assets/media/marker/marker_15.svg",
    img3: "assets/media/leader-answer/leader_selected_1.svg",
    img4:"assets/media/info-answer/info_1.svg",
    img5:"assets/media/info-answer/info_selected_1.svg",
    img6:"assets/media/marker/marker_1.svg",
    img7:"assets/media/leader-answer/leader_2.svg",
    img8:"assets/media/leader-answer/leader_selected_2.svg",
    img9:"assets/media/info-answer/info_2.svg",
    img10:"assets/media/info-answer/info_selected_2.svg",
    img11:"assets/media/marker/marker_2.svg",
    img12:"assets/media/leader-answer/leader_3.svg",
    img13:"assets/media/leader-answer/leader_selected_3.svg",
    img14:"assets/media/info-answer/info_3.svg",
    img15:"assets/media/info-answer/info_selected_3.svg",
    img16:"assets/media/marker/marker_3.svg",
    img17:"assets/media/leader-answer/leader_4.svg",
    img18:"assets/media/leader-answer/leader_selected_4.svg",
    img19:"assets/media/info-answer/info_4.svg",
    img20:"assets/media/info-answer/info_selected_4.svg",
    img21:"assets/media/marker/marker_4.svg",
    img22:"assets/media/leader-answer/leader_5.svg",
    img23:"assets/media/leader-answer/leader_selected_5.svg",
    img24:"assets/media/info-answer/info_5.svg",
    img25:"assets/media/info-answer/info_selected_5.svg",
    img26:"assets/media/marker/marker_5.svg",
    img27:"assets/media/leader-answer/leader_6.svg",
    img28:"assets/media/leader-answer/leader_selected_6.svg",
    img29:"assets/media/info-answer/info_6.svg",
    img30:"assets/media/info-answer/info_selected_6.svg",
    img31:"assets/media/marker/marker_6.svg",
    img32:"assets/media/leader-answer/leader_7.svg",
    img33:"assets/media/leader-answer/leader_selected_7.svg",
    img34:"assets/media/info-answer/info_7.svg",
    img35:"assets/media/info-answer/info_selected_7.svg",
    img36:"assets/media/marker/marker_7.svg",
    img37:"assets/media/leader-answer/leader_8.svg",
    img38:"assets/media/leader-answer/leader_selected_8.svg",
    img39:"assets/media/info-answer/info_8.svg",
    img40:"assets/media/info-answer/info_selected_8.svg",
    img41:"assets/media/marker/marker_8.svg",
    img42:"assets/media/leader-answer/leader_9.svg",
    img43:"assets/media/leader-answer/leader_selected_9.svg",
    img44:"assets/media/info-answer/info_9.svg",
    img45:"assets/media/info-answer/info_selected_9.svg",
    img46:"assets/media/marker/marker_9.svg",
    img47:"assets/media/leader-answer/leader_10.svg",
    img48:"assets/media/leader-answer/leader_selected_10.svg",
    img49:"assets/media/info-answer/info_10.svg",
    img50:"assets/media/info-answer/info_selected_10.svg",
    img51:"assets/media/marker/marker_10.svg",
    img52:"assets/media/leader-answer/leader_11.svg",
    img53:"assets/media/leader-answer/leader_selected_11.svg",
    img54:"assets/media/info-answer/info_11.svg",
    img55:"assets/media/info-answer/info_selected_11.svg",
    img56:"assets/media/marker/marker_11.svg",
    img57:"assets/media/leader-answer/leader_12.svg",
    img58:"assets/media/leader-answer/leader_selected_12.svg",
    img59:"assets/media/info-answer/info_12.svg",
    img60:"assets/media/info-answer/info_selected_12.svg",
    img61:"assets/media/marker/marker_12.svg",
    img62:"assets/media/leader-answer/leader_13.svg",
    img63:"assets/media/leader-answer/leader_selected_13.svg",
    img64:"assets/media/info-answer/info_13.svg",
    img65:"assets/media/info-answer/info_selected_13.svg",
    img66:"assets/media/marker/marker_13.svg",
    img67:"assets/media/leader-answer/leader_14.svg",
    img68:"assets/media/leader-answer/leader_selected_14.svg",
    img69:"assets/media/info-answer/info_14.svg",
    img70:"assets/media/info-answer/info_selected_14.svg",
    img71:"assets/media/marker/marker_14.svg",
    img72:"assets/media/leader-answer/leader_15.svg",
    img73:"assets/media/leader-answer/leader_selected_15.svg",
    img74:"assets/media/info-answer/info_15.svg",
    img75:"assets/media/info-answer/info_selected_15.svg"
};
  // readFiles(folder, function(filename, content) {
  //   data[filename] = content;
  //   console.log(content)
  // }, function(err) {
  //   throw err;
  // });
  console.log(data)

  // 
// 
// assuming you've gotten the urls from somewhere and put them in a JS array
// var urls = ['url_image_1.svg', 'url_image_2.svg', ... ];

// var svgCache = {};

// function loaded(){
//   // just increment the counter if there are still images pending...
//   if(counter++ >= total){
//     // this function will be called when everything is loaded
//     // e.g. you can set a flag to say "I've got all the images now"
//     alldone();
//   }
// }

// var counter = 0;
// var total = urls.length;

// // This will load the images in parallel:
// // In most browsers you can have between 4 to 6 parallel requests
// // IE7/8 can only do 2 requests in parallel per time
// for( var i=0; i < total; i++){
//   var img = new Image();
//   // When done call the function "loaded"
//   img.onload = loaded;
//   // cache it
//   svgCache[urls[i]] = img;
//   img.src = urls[i];
// }

// function alldone(){
//   // from this point on you can use the cache to serve the images
//   ...
//   // say you want to load only the first image
//   showImage('url_image_1.svg', 'imageDivId');
// }

// // basically every time you want to load a different image just use this function
// function showImage(url, id){
//   // get the image referenced by the given url
//   var cached = svgCache[url];
//   // and append it to the element with the given id
//   document.getElementById(id).appendChild(cached);
// }

// 
  // 
  // loading names and acts
  for (let i = 0; i < NUM_OF_LEADERS; i++) {
    // names
    // the graphics is the background of the div
    $("#names-flexbox").append(`<img id="leader-${i+1}" data-num=${i+1} class="leaders" src="assets/media/leader-answer/leader_${i+1}.svg">`);
    // $(`#name-${i+1}`).attr("src", `assets/media/leaders/leader_${i+1}.svg`);
    // acts
    // adding internal text div to the HTML div
    $(`#act-${i+1}`).append(`<div class="act-text">${arrLeaders[i].act}</div>`);
    //adding components graphics
    $(`#act-${i+1}`).append(`<img id="component-${i+1}" data-num=${i+1} class="components" src="assets/media/info-answer/info_${i+1}.svg">`);
  }
  // event listeners
  // start
  $("#play-button").on("click", function() {
    scientistOut();
    setTimeout(toggleBlackOpacityDiv, 1100);
    setTimeout(function() {
      $("#opening-ending-container").css("display", "none");
    }, 1100);
    $("#notebook-scrollbar").html("");
    audio.pause();
  });
  $("#about").on("click", function() {
    scientistOut();
    $("#notebook-container").css("display", "flex");
    $("#notebook-container").animate({
      bottom: "142vw"
    }, 300);
    $("#notebook-scrollbar").html(`<div id="about-title">אודות</div><div id="about-content">רמ"ד טי"ל: רס"ן מיגל לויתן<br>רת"ח פרוייקטים: רס"ר שלומי אוגרן<br>רת"ח מו"פ וחדשנות בלמידה: סמ"ר גל גנסין<br><br>תכנות: טור' טל סרוסי<br>עיצוב גרפי: רב"ט מייה ליבנה<br><br>מומחה התוכן: סגן שחף שוחט<br><br>גרסה: 1.0.2021</div><img id="till-symbol" class="symbol" src="assets/media/symbols/tilblack.svg"><img id="school-symbol" class="symbol" src="assets/media/symbols/סמל בית הספר הכשם.png">`);
    audio.pause();
    audio.currentTime = 0;
  });
  // game
  $(".acts").on("click", function() {
    selected($("#component-" + $(this).attr("id").slice(4)), "info", "component");
    for (var j = 1; j <= src.length; j++) {
      console.log(src[j-1] + $(this).attr("id").slice(4) + ".svg");
      // queue.loadFile(src[j-1] + $(this).attr("id").slice(4) + ".svg");
    }
  });
  $(".leaders").on("click", function() {
    selected($(this), "leader", "leader");
    for (var j = 1; j <= src.length; j++) {
      console.log(src[j-1] + $(this).attr("id").slice(7) + ".svg");
      // queue.loadFile(src[j-1] + $(this).attr("id").slice(7) + ".svg");
    }
  });
  $("#notebook-button").on("click", function() {
    $("#notebook-container").css("display", "flex");
    $("#notebook-container").animate({
      bottom: "142vw"
    }, 300);
    toggleBlackOpacityDiv();
  });
  $("#back-button").on("click", function() {
    // if the content is "about", the screen returns to the opening screen
    if ($("#about-title").text() === "אודות" || $("#speech-bubble").text().includes("עזרתם")) {
      start();
      scientistInAbout()
    } else {
      toggleBlackOpacityDiv();
    }
    $("#notebook-container").animate({
      bottom: "2vw"
    }, 300).promise().then(function() {
      $("#notebook-container").css("display", "none");
    });
  });
  scientistInStart();
}

function start() {
  setTimeout(function() {
    $("#speech-bubble").delay(700).animate({
      opacity: "10"
    }, 1500);
    $("#play-button").delay(800).animate({
      opacity: "10"
    }, 1500);
    $("#about").delay(900).animate({
      opacity: "10"
    }, 1500);
  }, 500);
  if ($("#scientist").attr("src") === "assets/media/general/scientist-start.svg") {
    setTimeout(function() {
      audio.play();
    }, 800);
  }
  if ($("#scientist").attr("src") === "assets/media/general/scientist-end.svg") {
    $("#notebook-button-ending").delay(1500).animate({
      opacity: "10"
    }, 1500);
  }
}

function scientistInStart() {
  setTimeout(function() {
    $("#scientist").animate({
      top: "50vw"
    }, 200).animate({
      top: "20vw"
    }, 200).animate({
      top: "30vw"
    }, 200).delay(200).animate({
      height: "71vw",
      top: "27vw"
    }, 200).animate({
      height: "67vw",
      top: "30vw"
    }, 200);
  }, 800);
  $("#scientist").on("click", function() {
    $("#scientist").off("click");
    start();
    $("#scientist").animate({
      top: "0vw"
    }, 500)
  });
}

function scientistInAbout() {
  setTimeout(function() {
    $("#scientist").animate({
      top: "20vw"
    }, 200).animate({
      top: "-10vw"
    }, 200).animate({
      top: "0vw"
    }, 200);
  }, 800);
}

function scientistOut() {
  $("#scientist").animate({
    top: "-77vw"
  }, 400)
  $("#speech-bubble").animate({
    opacity: "0"
  }, 500);
  $("#play-button").animate({
    opacity: "0"
  }, 500);
  $("#about").animate({
    opacity: "0"
  }, 500);
  $("#notebook-button-ending").animate({
    opacity: "0"
  }, 500);
}

function selected(clickedItem, imgName, itemType) {
  // the last item shall be empty
  $("#" + itemType + "-" + window[`selected${itemType}`]).attr("src", "assets/media/" + imgName + "-answer/" + imgName + "_" + window[`selected${itemType}`] + ".svg");
  // if the last item is not the current item
  if (window[`selected${itemType}`] !== clickedItem.attr("data-num")) {
    // the variable changes to the new item's number
    window[`selected${itemType}`] = clickedItem.attr("data-num");
    // the item is selected
    clickedItem.attr("src", "assets/media/" + imgName + "-answer/" + imgName + "_selected_" + window[`selected${itemType}`] + ".svg");
    // if the vial is empty, it is switched to new picture with the new item
    if (($("#vial").css("background-image").includes("assets/media/vial/vial.svg"))) {
      $("#vial").css("background-image", "url(assets/media/vial/" + imgName + "_vial_" + window[`selected${itemType}`] + ".svg)");
    }
    // if the vial is including another item's picture, it is switched to new picture with the new item
    else if ($("#vial").css("background-image").includes(imgName)) {
      $("#vial").css("background-image", "url(assets/media/vial/" + imgName + "_vial_" + window[`selected${itemType}`] + ".svg)");
    } else {
      if (selectedcomponent === selectedleader) {
        reaction("right");
        // $("#vial").css("background-image", "url(assets/media/vial/vial_right.svg)");
      } else {
        reaction("wrong");
      }
    }
  }
  // canceling double clicked component mark
  else {
    clickedItem.attr("src", "assets/media/" + imgName + "-answer/" + imgName + "_" + window[`selected${itemType}`] + ".svg");
    window[`selected${itemType}`] = null;
    $("#vial").css("background-image", "url(assets/media/vial/vial.svg)");
  }
}

function reaction(reactionKind) {
  let effect;
  if (reactionKind === "right") {
    effect = "cloud";
    // appending leader to the notebook
    $("#notebook-scrollbar").append("<div id='marked-name-" + selectedleader + "' class='marked-name'>" + arrLeaders[selectedleader - 1].name + "</div><div id='marked-text-" + selectedcomponent + "' class='marked-text'>" + arrLeaders[selectedcomponent - 1].act + "</div>");
    $("#marked-name-" + selectedleader).css("background-image", "url(assets/media/marker/marker_" + selectedleader + ".svg)");
    $("#cloud1").css({
      "visibility": "hidden",
      "display": "block"
    });
    $("#explosion1").css({
      "visibility": "visible",
      "display": "none"
    });
    // determin scientist reaction
    audio = new Audio("assets/media/audio/cut/right_" + Math.floor(Math.random() * 3 + 1) + ".mp3");

  } else {
    effect = "explosion";
    $("#explosion1").css({
      "visibility": "hidden",
      "display": "block"
    });
    $("#cloud1").css({
      "visibility": "visible",
      "display": "none"
    });
    // determin scientist reaction
    audio = new Audio("assets/media/audio/cut/wrong_" + Math.floor(Math.random() * 3 + 1) + ".mp3");
  }
  // scientist voice
  audio.play();
  for (let i = 1; i <= NUM_OF_EXPLOSION_STAGES; i++) {
    // explosion appears
    setTimeout(function() {
      $("#" + effect + i).css("display", "block");
      if (i === 1) {
        $("#" + effect + 1).css("visibility", "visible");
      }
    }, i * (100));
    // explosion disappears
    setTimeout(function() {
      $("#" + effect + i).css("display", "none");
      if (i === 1) {
        $("#" + effect + i).css("visibility", "hidden");
      }
      if (i === NUM_OF_EXPLOSION_STAGES) {
        $("#" + effect + 1).css("display", "block");
      }
    }, i * (100) + 100);
  }
  // changing vial liquid
  setTimeout(function() {
    $("#vial").css("background-image", "url(assets/media/vial/vial_" + reactionKind + ".svg)");
  }, 500);

  // removing event listeners
  $(".acts").off("click");
  $(".leaders").off("click");

  setTimeout(function() {
    if (reactionKind === "right") {
      // removing right answers
      $("#act-" + selectedcomponent).fadeOut();
      $("#leader-" + selectedleader).fadeOut();

      ending++;
      if (ending === NUM_OF_LEADERS) {
        $("#notebook-button").off("click");
        $("#play-button").off("click");
        $("#play-button").on("click", function() {
          window.location.href = "https://youtube.com/shorts/w93f45UhEpg?feature=share";
        });
        setTimeout(function() {
          toggleBlackOpacityDiv();
          $("#opening-ending-container").css("display", "block");
          $("#about").css("display", "none");
          $("#scientist").attr("src", "assets/media/general/scientist-end.svg");
          audio = new Audio("assets/media/audio/cut/end.mp3");
          setTimeout(function() {
            audio.play();
          }, 1000);
          start();
          scientistInAbout();
          $("#play-button").css({
            "top": "-30vw",
            "width": "20%",
            "left": "38vw"
          });
          $("#notebook-button-ending").on("click", function() {
            $("#notebook-container").css("display", "flex");
            $("#notebook-container").animate({
              bottom: "142vw"
            }, 300);
            scientistOut();
          });
          $("#speech-bubble").html(`עזרתם לי להכין את כל התרופות!<br><span id="great-job-span">עבודה מעולה!</span><br><br>בואו נמשיך הלאה`);

        }, 1500);
      }
    } else {
      // removing item's glow
      $("#component-" + selectedcomponent).attr("src", "assets/media/info-answer/info_" + selectedcomponent + ".svg");
      $("#leader-" + selectedleader).attr("src", "assets/media/leader-answer/leader_" + selectedleader + ".svg");

    }

    selectedcomponent = null;
    selectedleader = null;
    // clearing vial
    $("#vial").css("background-image", "url(assets/media/vial/vial.svg)");
    // adding again event listeners
    $(".acts").on("click", function() {
      selected($("#component-" + $(this).attr("id").slice(4)), "info", "component");
    });
    $(".leaders").on("click", function() {
      selected($(this), "leader", "leader");
    });
  }, 1500);
}

function toggleBlackOpacityDiv() {
  $("#black-opacity").fadeToggle();
}