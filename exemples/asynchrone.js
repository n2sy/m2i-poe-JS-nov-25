// // Promise avec async et await

// async function boireCafe() {
//   try {
//     let data = await ramenerCafeABernard();
//     console.log("Je bois le " + data + " ramené");
//   } catch (err) {
//     console.log("Erreur capturée ", err.toString());
//   }
// }
// boireCafe();
(async function () {
  console.log("Instruction 1");
  console.log("Instruction 2");
  let data = await ramenerCafeABernard();
  console.log("Je bois le " + data + " ramené");
  // traitement supp
  console.log("Instruction 4");
  console.log("Instruction 5");
})();

function ramenerCafeABernard() {
  return new Promise((resolve, reject) => {
    // setTimeout(() => {
    //   reject(new Error("Bistrot fermé"));
    // }, 3000);
    setTimeout(() => {
      resolve("Café");
    }, 3000);
  });
}

//Promise avec .then et .catch
// console.log("Instruction 1");
// console.log("Instruction 2");
// ramenerCafeABernard()
//   .then((data : Product) => {
//     console.log("Je bois le " + data + " ramené");
//   })
//   .catch((err) => {
//     console.log("Erreur capturée ", err.toString());
//   })
//   .finally(() => {
//     console.log("Au revoir et Merci !");
//   });
// console.log("Instruction 4");
// console.log("Instruction 5");

// function ramenerCafeABernard() {
//   return new Promise((resolve, reject) => {
//     // setTimeout(() => {
//     //   reject(new Error("Bistrot fermé"));
//     // }, 3000);
//     setTimeout(() => {
//       resolve("Café");
//     }, 3000);
//   });
// }
