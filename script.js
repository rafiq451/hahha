const imgBerubah = document.querySelector('.img-emot');
imgBerubah.addEventListener('click', function () {
  const img = document.querySelector('.emot');
  const gambar = ['3', '4', '5', '6'];
  let i = 0;

  img.setAttribute('src', 'img/' + gambar[i++] + '.gif');
});

const author = 'Rafiq';

document.getElementById('hati').innerHTML = `Made with &#10084;&#65039; by ${author}`;

const swals = Swal.mixin({
  cancelButtonColor: '#d33',

  confirmButtonColor: '#3085d6',
});

async function mulai() {
  await swals.fire('Hallo', 'gua ada pertanyaan ni buat lu', 'question');

  await swals.fire('Jawab yang jujur ya!');

  await swals.fire('Awas aje kalo boong!!', '', 'error');

  var { value: nama } = await swals.fire({
    title: 'Masukin nama kamu dulu',

    input: 'text',

    showCancelButton: true,
  });

  if (nama) {
    var { isConfirmed: sayang } = await swals.fire({
      title: `${nama} sayang ga sama ${author}`,

      confirmButtonText: 'Ya!',

      cancelButtonText: 'Gak',

      showCancelButton: true,
    });
    if (sayang) {
      await swals.fire('gua juga sayang sama lu 	&#128511;');
    } else {
      await swals.fire('yah padahal gua sayang banget sama lu :(');
      var { value: alasan } = await swals.fire({
        title: `Bener ni gak sayang  &#128148;	&#128540; ?`,
      });

      if (alasan) {
        await swals.fire('One more question ?');
        var { isConfirmed: alasan } = await swals.fire({
          title: `${nama} beneran gak sayang ni sama ${author} ?`,

          confirmButtonText: 'sayang!',

          cancelButtonText: 'Gak',

          showCancelButton: true,
        });
        if (alasan) {
          await swals.fire('	&#128525;');
          var { isConfirmed: alasan } = await swals.fire({
            title: `Alhamdullilah kalo begitu &#128522;`,
          });
          if (alasan) {
            await swals.fire('gua juga sayang sama lu 	&#128511;');
            if (alasan) {
              var { value: persen } = await swals.fire({
                title: 'Seberapa sayang emangnya?',

                icon: 'question',

                input: 'range',

                inputLabel: 'Antara 1-100 ya',

                inputAttributes: {
                  min: 1,

                  max: 100,
                },

                inputValue: 50,
              });

              if (persen >= 50 && persen <= 100) {
                await swals.fire(`gua sayang sama lu lebih dari &#10084;&#65039; ${persen}%`);
                var { isConfirmed: kangen } = await swals.fire({
                  title: 'lu mau ketemu ga sama gua?',

                  confirmButtonText: 'Ya!',

                  cancelButtonText: 'Gak',

                  showCancelButton: true,
                });
                // } else {
                //   await swals.fire(`yah padahal gua sayang sama lu lebih dari &#xF31F; ${persen}%`)
                // }
                if (kangen) {
                  await swals.fire('ya gua si yes 	&#128521;');

                  await swals.fire('terakhir deh');

                  await swals.fire('coba klik ikon hati di paling bawah ');
                } else {
                  await swals.fire('terakhir deh');

                  await swals.fire('coba klik ikon hati di paling bawah ');
                }
              } else {
                await swals.fire(`makasih udah sayang sama gua ${persen}% &#128519;`);

                await swals.fire('mungkin suatu saat kamu bisa');
                await swals.fire(`sayang sama  ${author}  lebih dari ${persen}%😄`);
                await swals.fire(`Semoga saja 😇`);
              }
            } else {
              //
            }
          }
        } else {
          await swals.fire(`jbjbjb`);
        }
      }
    }

    if (sayang) {
      var { value: persen } = await swals.fire({
        title: 'Seberapa sayang emangnya?',

        icon: 'question',

        input: 'range',

        inputLabel: 'Antara 1-100 ya',

        inputAttributes: {
          min: 1,

          max: 100,
        },

        inputValue: 50,
      });

      if (persen >= 50 && persen <= 100) {
        await swals.fire(`gua sayang sama lu lebih dari &#10084;&#65039; ${persen}%`);
        var { isConfirmed: kangen } = await swals.fire({
          title: 'lu mau ketemu ga sama gua?',

          confirmButtonText: 'Ya!',

          cancelButtonText: 'Gak',

          showCancelButton: true,
        });
        // } else {
        //   await swals.fire(`yah padahal gua sayang sama lu lebih dari &#xF31F; ${persen}%`)
        // }
        if (kangen) {
          await swals.fire('ya gua si yes 	&#128521;');

          await swals.fire('terakhir deh');

          await swals.fire('coba klik ikon hati di paling bawah ');
        } else {
          await swals.fire('oke 😁');

          await swals.fire('terakhir deh');

          await swals.fire('coba klik ikon hati di paling bawah ');
        }
      } else {
        await swals.fire(`makasih udah sayang sama gua ${persen}% &#128519;`);

        await swals.fire('mungkin suatu saat lu bisa');
        await swals.fire(`sayang sama  ${author}  lebih dari ${persen}%😄`);
        await swals.fire(`Semoga saja 😇`);
        await swals.fire('coba klik ikon hati di paling bawah ');
      }
    } else {
      //
    }
  } else {
    //   gak isi nama
  }
}

function hati() {
  document.getElementById('button').style = 'display: none';

  document.getElementById('iloveyou').style = '';
  window.location = 'https://bit.ly/36ynZm1';
}
