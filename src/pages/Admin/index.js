/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./style.css";
export default function Admin() {
  //ici code javascript

  return (
    <div>
      <html>
        <head>
          <title>Administrateurs du Site</title>
        </head>
        <body>
          <header>
            <h1>Administrateurs du Site</h1>
          </header>

          <div class="container">
            <div class="card">
              <img
                src="https://scontent.fnbe1-2.fna.fbcdn.net/v/t39.30808-6/336671001_1709523456134211_1058922671244215601_n.jpg?stp=c0.38.619.619a_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Wveia2WKSQYAX_oczF_&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfD6d2QTymfAQhjl6tdwf-C3ts34gNzGBVYcC0TM3fJc5A&oe=641B7AB0"
                alt="Photo de l'administrateur 1"
              />
              <div class="info">
                <h2>Khaoula Romdhani</h2>
                <p>
                  <strong>Niveau :</strong> 2eme année de Licence
                  <strong> Section : </strong>systeme embarqué et iot
                  <strong>Faculté :</strong>ISMAIK(institut superieure de math
                  appliqué et informatique de kairouan){" "}
                </p>
              </div>
            </div>

            <div class="card">
              <img
                src="https://scontent.xx.fbcdn.net/v/t1.15752-9/312400319_643310880536449_8867938626630083912_n.jpg?stp=dst-jpg_p206x206&_nc_cat=108&ccb=1-7&_nc_sid=aee45a&_nc_ohc=Ms7qtDx75wEAX84S1Db&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTkORocmdDFkNycS5d_mYuqwGgzsw_0YTfyZ5Nx6scDRA&oe=643EDCE0"
                alt="Photo de l'administrateur 2"
              />
              <div class="info">
                <h2>Yassine Maghraoui</h2>
                <p>
                  <strong>Niveau :</strong> 2eme année de Licence
                  <strong> Section : </strong>systeme embarqué et iot
                  <strong>Faculté :</strong>ISMAIK(institut superieure de math
                  appliqué et informatique de kairouan)
                </p>
              </div>
            </div>

            <div class="card">
              <img
                src="https://scontent.fnbe1-2.fna.fbcdn.net/v/t39.30808-6/316829979_1125125104838854_4826692427959011588_n.jpg?stp=dst-jpg_s851x315&_nc_cat=109&ccb=1-7&_nc_sid=da31f3&_nc_ohc=wVdDwcMtEh8AX8lR6-D&_nc_ht=scontent.fnbe1-2.fna&oh=00_AfBzfVMCvUHwWTY1CX6VAePWdfrDEixfcYRZUByMj8H-wA&oe=641BFA5B"
                alt="Photo de l'administrateur 3"
              />
              <div class="info">
                <h2>BMabrouka Massoudi</h2>
                <p>
                  <strong>Niveau :</strong> 2eme année de Licence
                  <strong> Section : </strong>systeme embarqué et iot
                  <strong>Faculté :</strong>ISMAIK(institut superieure de math
                  appliqué et informatique de kairouan)
                </p>
              </div>
            </div>
          </div>
        </body>
      </html>
    </div>
  );
}
