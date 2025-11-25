var monObservable = new Rx.Observable((observer) => {
  setTimeout(() => {
    observer.next("First Package");
  }, 2000);
  setTimeout(() => {
    observer.next("Second Package");
  }, 4000);
  setTimeout(() => {
    observer.error(new Error("Erreur provquée sur le flux"));
  }, 5000);
  setTimeout(() => {
    observer.next("Third Package");
  }, 6000);
  setTimeout(() => {
    observer.complete();
  }, 8000);
  //   setTimeout(() => {
  //     observer.next("4th Package");
  //   }, 10000);
});

monObservable.subscribe({
  next: (data) => {
    console.log(data);
  },
  error: (err) => {
    console.log("Erreur détectée", err.toString());
  },
  complete: () => {
    console.log("Flux fermée");
  },
});
