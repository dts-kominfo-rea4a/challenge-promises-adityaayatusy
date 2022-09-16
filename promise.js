const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = (emosi) => {
  return new Promise((resolver, reject) => {
    var marah = 0;
    var tdmarah = 0;

    (async () => {
      //get data
      const dataVGC = await promiseTheaterVGC();
      const dataIXX = await promiseTheaterIXX();

      //count
      dataVGC.forEach((element) => {
        element.hasil === "marah" ? marah++ : tdmarah++;
      });
      dataIXX.forEach((element) => {
        element.hasil === "marah" ? marah++ : tdmarah++;
      });

      //output
      if (emosi === "tidak marah") {
        resolver(tdmarah);
      } else if (emosi === "marah") {
        resolver(marah);
      } else {
        reject("Maaf, pilihan tidak terdaftar");
      }
    })();
  });
};

module.exports = {
  promiseOutput,
};
