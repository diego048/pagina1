<template>
  <div>
    <v-container>
      <v-row class="d-flex">
        <v-col
          cols="6"
          sm="4"
          md="4"
          v-scrolls
          class="flex d-flex align-self-stretch"
        >
        <v-card elevation="21" style="width: 100%" align="center" @click="showDialog()">
          <v-img
                  :src="p13"
                  height="200px"
                  cover
                ></v-img>
                <v-card-title
                  class="text-pre-wrap"
                  style="word-break: break-word"
                >
                  CD GLORIA
                </v-card-title>
                <v-card-subtitle> más info </v-card-subtitle>
        </v-card>
        </v-col>

        <v-col
          cols="6"
          sm="4"
          md="4"
          v-scrolls
          class="flex d-flex align-self-stretch"
        >
        <v-card elevation="21" style="width: 100%" align="center" @click="showDialog1()">
          <v-img
                  :src="p12"
                  height="200px"
                  cover
                ></v-img>
                <v-card-title
                  class="text-pre-wrap"
                  style="word-break: break-word"
                >
                  CD NESTLE
                </v-card-title>
                <v-card-subtitle> más info </v-card-subtitle>
        </v-card>
        </v-col>
        <dibox v-show="dialog0" @close="hideDialog1()">
          <v-container style="overflow-x:hidden; width: 80vw">
            <div style="overflow-x:hidden">
              <div class="d-flex justify-space-between">
                <v-card-title class="d-flex justify-end">CD NESTLE</v-card-title>
                <v-card-actions class="d-flex justify-start">
                  <v-btn
                    style="color: rgb(203, 50, 52)"
                    variant="text"
                    @click="hideDialog1()"
                  >
                    <h1>X</h1>
                  </v-btn>
                </v-card-actions>
              </div>
              <v-divider></v-divider>
              <v-container>
                <v-carousel hide-delimiters height="auto" show-arrows="hover" style="overflow-x:hidden">

                  <!--Cuadro 2-->
                  <v-carousel-item>
                    <v-container>
                      <v-row>
                        <v-col cols="6" sm="6" md="6" class="d-none d-sm-flex">
                          <v-col>
                          <v-img
                              :src="p14"
                              style="width: 100%"
                            />
                            <v-img
                              :src="p15"
                             style="width: 100%"
                            />
                          </v-col>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <h2>Centro de distribución más alto del Perú</h2>
                          <ol
                            align="justify"
                            style="
                              padding-right: 3vh;
                              padding-left: 3vh;
                              font-size: 100%;
                            "
                          >
                            <li>Capacidad 5200 pp</li>
                            <li>Almacén Autoportante</li>
                            <li>Altura; 15 m</li>
                            <li>
                              Almacenamiento
  
                              <ol
                                align="justify"
                                style="
                                  padding-right: 3vh;
                                  padding-left: 6vh;
                                  font-size: 100%;
                                "
                              >
                                <li>Sistema Satelital</li>
                                <li>Estantería Selectiva</li>
                              </ol>
                            </li>
                            <li>
                              Almacén con mayor densidad de Almacenaje en el Perú;
                              <ol
                                align="justify"
                                style="
                                  padding-right: 3vh;
                                  padding-left: 6vh;
                                  font-size: 100%;
                                "
                              >
                                <li>3.5 pp/m2</li>
                              </ol>
                            </li>
                          </ol>
                        </v-col>
                        <v-col cols="12" sm="6" md="6" class="d-flex d-sm-none">
                          <v-col>
                          <v-img
                              :src="p14"
                              style="width: 100%"
                            />
                            <v-img
                              :src="p15"
                             style="width: 100%"
                            />
                          </v-col>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-carousel-item>
  
                  <!--Cuadro 3-->
                  <v-carousel-item>
                    <v-container>
                      <v-row>
                        <v-col>
                          <v-img
                            :src="p16"
                            style="width: 100%"
                          />
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-carousel-item>
  
                  <!--Cuadro 4-->
                  <v-carousel-item>
                    <v-container>
                      <v-row>
                        <v-col>
                          <h2 align="center">Imágenes Interiores</h2>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12" sm="4" md="4">
                          <v-img
                            :src="p17"
                            style="width: 100%"
                          />
                        </v-col>
                        <v-col cols="12" sm="4" md="4">
                          <v-img
                            :src="p18"
                            style="width: 100%"
                          />
                        </v-col>
                        <v-col cols="12" sm="4" md="4">
                          <v-img
                            :src="p19"
                            style="width: 100%"
                          />
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-carousel-item>
                </v-carousel>
              </v-container>
              </div>
            </v-container>
        </dibox>
        <!--SEGUNDO-->
        <v-col
          cols="6"
          sm="4"
          md="4"
          v-scrolls
          class="flex d-flex align-self-stretch"
        >
        <v-card elevation="21" style="width: 100%" align="center" @click="showDialog2()">
          <v-img
                  :src="p20"
                  height="200px"
                  cover
                ></v-img>
                <v-card-title
                  class="text-pre-wrap"
                  style="word-break: break-word"
                >
                  MEDIFARMA
                </v-card-title>
                <v-card-subtitle> más info </v-card-subtitle>
        </v-card>
        </v-col>
        <dibox v-show="dialog1" @close="hideDialog2()">
          <v-container style="overflow-x:hidden; width: 80vw">
            <div style="overflow-x:hidden">
              <div class="d-flex justify-space-between">
                <v-card-title class="d-flex justify-end">Medifarma</v-card-title>
                <v-card-actions class="d-flex justify-start">
                  <v-btn
                    style="color: rgb(203, 50, 52)"
                    variant="text"
                    @click="hideDialog2()"
                  >
                    <h1>X</h1>
                  </v-btn>
                </v-card-actions>
              </div>
              <v-divider></v-divider>
              <v-container>
                <v-carousel hide-delimiters height="auto" show-arrows="hover" style="overflow-x:hidden">
                  <v-carousel-item>
                    <v-container>
                      <v-row>
                        <v-col>
                          <h2>Estantería MaxiPacker Autoportante</h2>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12" sm="6" md="6">
                          <v-img
                            :src="p20"
                            style="width:100%"
                          />
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-img
                            :src="p21"
                             style="width:100%"
                          />
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-carousel-item>
  
                  <!--Cuadro 6-->
                  <v-carousel-item>
                    <v-container>
                      <v-row>
                        <v-col>
                          <h2>Estantería MaxiPacker Autoportante</h2>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12" sm="6" md="6">
                          <v-img
                            :src="p22"
                             style="width:100%"
                          />
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-img
                            :src="p23"
                             style="width:100%"
                          />
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-carousel-item>
  
                  <!--Cuadro 7-->
                  <v-carousel-item>
                    <v-container>
                      <v-row>
                        <v-col>
                          <h2>Estantería MaxiPacker Autoportante</h2>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12" sm="6" md="6">
                          <v-img
                            :src="p24"
                             style="width:100%"
                          />
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-img
                            :src="p25"
                             style="width:100%"
                          />
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-carousel-item>
                </v-carousel>
              </v-container>
              </div>
            </v-container>
        </dibox>
  
        <!--TERCERO-->
        <v-col
          cols="6"
          sm="4"
          md="4"
          v-scrolls
          class="flex d-flex align-self-stretch"
        >
        <v-card elevation="21" style="width: 100%" align="center" @click="showDialog3()">
          <v-img
                  :src="p26"
                  height="200px"
                ></v-img>
                <v-card-title
                  class="text-pre-wrap"
                  style="word-break: break-word"
                >
                  SUPERMERCADOS PERUANOS
                </v-card-title>
                <v-card-subtitle> más info </v-card-subtitle>
        </v-card>
        </v-col>
        <dibox v-show="dialog2" @close="hideDialog3()">
          <v-container style="overflow-x:hidden; width: 80vw">
            <div style="overflow-x:hidden">
              <div style="width: 80vw">
                <div class="d-flex justify-space-between">
                  <v-card-title class="d-flex justify-end class text-pre-wrap" style="word-break: break-word"
                    >SUPERMERCADOS PERUANOS</v-card-title
                  >
                  <v-card-actions class="d-flex justify-start">
                    <v-btn
                      style="color: rgb(203, 50, 52)"
                      variant="text"
                      @click="hideDialog3()"
                    >
                      <h1>X</h1>
                    </v-btn>
                  </v-card-actions>
                </div>
               </div>
              <v-divider></v-divider>
              <v-container>
                <v-carousel hide-delimiters height="auto" show-arrows="hover" style="overflow-x:hidden">
                  <v-carousel-item>
                    <v-container>
                      <v-row>
                        <v-col>
                          <h2>Mezzanine</h2>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12" sm="6" md="6">
                          <v-img
                            :src="p26"
                            style="width: 100%"
                          />
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-img
                            :src="p27"
                            style="width: 100%"
                          />
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-carousel-item>
  
                  <!--Cuadro 8-->
                  <v-carousel-item>
                    <v-container>
                      <v-row>
                        <v-col>
                          <h2>Mezanine</h2>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12" height="400">
                          <video controls style="width: 100%; height: 60vh">
                            <source :src="p1" type="video/mp4" />
                          </video>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-carousel-item>
                </v-carousel>
              </v-container>
            </div>
            </v-container>
        </dibox>
        <!--CUARTO-->
        <v-col
          cols="6"
          sm="4"
          md="4"
          v-scrolls
          class="flex d-flex align-self-stretch"
        >
        <v-card elevation="21" style="width: 100%" align="center" @click="showDialog4()">
          <v-img
                  :src="p28"
                  height="200px"
                ></v-img>
                <v-card-title
                  class="text-pre-wrap"
                  style="word-break: break-word"
                >
                  TIENDAS EFE
                </v-card-title>
                <v-card-subtitle> más info </v-card-subtitle>
        </v-card>
        </v-col>
        <dibox v-show="dialog3" @close="hideDialog4()">
          <v-container style="overflow-x:hidden; width: 80vw">
            <div style="overflow-x:hidden">
              <div class="d-flex justify-space-between">
                <v-card-title class="d-flex justify-end"
                  >TIENDAS EFE</v-card-title
                >
                <v-card-actions class="d-flex justify-start">
                  <v-btn
                    style="color: rgb(203, 50, 52)"
                    variant="text"
                    @click="hideDialog4()"
                  >
                    <h1>X</h1>
                  </v-btn>
                </v-card-actions>
              </div>
              <v-divider></v-divider>
              <v-container>
                <v-carousel hide-delimiters height="auto" show-arrows="hover" style="overflow-x:hidden">
                  <v-carousel-item>
                    <v-container>
                      <v-row>
                        <v-col>
                          <h2>PROPUESTA FINAL</h2>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12">
                          <v-img
                            align="center"
                            :src="p29"
                            style="width: 100%"
                          />
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-carousel-item>
                </v-carousel>
              </v-container>
             </div>
             </v-container>
        </dibox>
        
        <!--CUARTO-->
        <v-col
          cols="6"
          sm="4"
          md="4"
          v-scrolls
          class="flex d-flex align-self-stretch"
        >
        <v-card elevation="21" style="width: 100%" align="center" @click="showDialog5()">
          <v-img
                  :src="p30"
                  height="200px"
                ></v-img>
                <v-card-title
                  class="text-pre-wrap"
                  style="word-break: break-word"
                >
                  RIPLEY
                </v-card-title>
                <v-card-subtitle> más info </v-card-subtitle>
        </v-card>
        </v-col>
        <dibox v-show="dialog4" @close="hideDialog5()">
          <v-container style="overflow-x:hidden; width: 80vw">
            <div style="overflow-x:hidden">
              <div class="d-flex justify-space-between">
                <v-card-title class="d-flex justify-end">RIPLEY</v-card-title>
                <v-card-actions class="d-flex justify-start">
                  <v-btn
                    style="color: rgb(203, 50, 52)"
                    variant="text"
                    @click="hideDialog5()"
                  >
                    <h1>X</h1>
                  </v-btn>
                </v-card-actions>
              </div>
              <v-divider></v-divider>
              <v-container>
                <v-carousel hide-delimiters height="auto" show-arrows="hover" style="overflow-x:hidden">
                  <v-carousel-item>
                    <v-container>
                      <v-row>
                        <v-col>
                          <h2>Optimización del espacio</h2>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12" sm="6" md="6">
                          <v-img
                            :src="p30"
                            style="width: 100%"
                          />
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-img
                            :src="p31"
                            style="width: 100%"
                          />
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-carousel-item>
                </v-carousel>
              </v-container>
            </div>
            </v-container>
        </dibox>
  
        <!--QUINTO-->
        <v-col
          cols="6"
          sm="4"
          md="4"
          v-scrolls
          class="flex d-flex align-self-stretch"
        >
        <v-card elevation="21" style="width: 100%" align="center" @click="showDialog6()">
          <v-img
                  :src="p44"
                  height="200px"
                  cover
                ></v-img>
                <v-card-title
                  class="text-pre-wrap"
                  style="word-break: break-word"
                >
                  MINERA PODEROSA
                </v-card-title>
                <v-card-subtitle> más info </v-card-subtitle>
        </v-card>
        </v-col>
        <dibox v-show="dialog5" @close="hideDialog6()">
          <v-container style="overflow-x:hidden; width: 80vw">
            <div style="overflow-x:hidden">
              <div class="d-flex justify-space-between">
                <v-card-title class="d-flex justify-end"
                  >MINERA PODEROSA</v-card-title
                >
                <v-card-actions class="d-flex justify-start">
                  <v-btn
                    style="color: rgb(203, 50, 52)"
                    variant="text"
                    @click="hideDialog6()"
                  >
                    <h1>X</h1>
                  </v-btn>
                </v-card-actions>
              </div>
              <v-divider></v-divider>
              <v-container>
                <v-carousel hide-delimiters height="auto" show-arrows="hover" style="overflow-x:hidden; width: 100%">
                  <!--Cuadro 11-->
                  <v-carousel-item>
                    <v-container>
                      <v-row>
                        <v-col>
                          <h2>Situación inicial</h2>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12" sm="6" md="6">
                          <v-img
                            :src="p33"
                            style="width: 100%"
                          />
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-img
                            :src="p34"
                            style="width: 100%"
                          />
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12">
                          <v-img
                            :src="p35"
                            style="width: 100%"
                          />
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-carousel-item>
  
                  <!--Cuadro 12-->
                  <v-carousel-item>
                    <v-container>
                      <v-row align="center">
                        <v-col cols="12" sm="6" md="4">
                          <h2 align="center">Estado Inical</h2>
                          <br />
                          <v-img
                            :src="p36"
                            style="width: 100%"
                          />
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <h2 align="center">
                            Estudio mecánico de suelos y topografía
                          </h2>
                          <v-img
                            :src="p37"
                            style="width: 100%"
                          />
                        </v-col>
                        <v-col cols="12" sm="12" md="4">
                          <h2 align="center">
                            Trazo y replanteo para Losa SuperPlana
                          </h2>
                          <v-img
                            :src="p38"
                            style="width: 100%"
                          />
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-carousel-item>
  
                  <!--Cuadro 13-->
                  <v-carousel-item>
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="6" md="6">
                          <h2 align="center">Losa SuperPlana</h2>
                          <video controls style="width: 100%">
                            <source :src="p3" type="video/mp4" />
                          </video>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <h2 align="center">Montaje de Almacén Autoportante</h2>
                          <video controls style="width: 100%">
                            <source :src="p4" type="video/mp4" />
                          </video>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-carousel-item>
  
                  <!--Cuadro 13-->
                  <v-carousel-item>
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="6" md="6">
                          <h2 align="center">Montaje de oficinas modulares</h2>
                          <video controls style="width: 100%">
                            <source :src="p5" type="video/mp4" />
                          </video>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <h2 align="center">Cerramiento fachada</h2>
                          <br class="d-none d-sm-flex d-md-none" />
                          <br class="d-none d-sm-flex d-md-none" />
                          <video controls style="width: 100%">
                            <source :src="p6" type="video/mp4" />
                          </video>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-carousel-item>
  
                  <!--Cuadro 13-->
                  <v-carousel-item>
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="4" md="4">
                          <h2 align="center">Montaje cantiléver</h2>
                          <video controls style="width: 100%">
                            <source :src="p7" type="video/mp4" />
                          </video>
                        </v-col>
                        <v-col cols="12" sm="4" md="4">
                          <h2 align="center">Montaje de tijerales</h2>
                          <video controls style="width: 100%">
                            <source :src="p8" type="video/mp4" />
                          </video>
                        </v-col>
                        <v-col cols="12" sm="4" md="4">
                          <h2 align="center">Montaje de cubierta</h2>
                          <video controls style="width: 100%">
                            <source :src="p9" type="video/mp4" />
                          </video>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-carousel-item>
  
                  <!--Cuadro 13-->
                  <v-carousel-item>
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="6" md="6">
                          <h2 align="center">interiores</h2>
                          <video controls style="width: 100%">
                            <source :src="p10" type="video/mp4" />
                          </video>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <h2 align="center">Patio Anexo</h2>
                          <video controls style="width: 100%">
                            <source :src="p11" type="video/mp4" />
                          </video>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-carousel-item>
  
                  <!--Cuadro 12-->
                  <v-carousel-item>
                    <v-container>
                      <v-row>
                        <v-col>
                          <h2>Propuesta Final</h2>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12" sm="6" md="6">
                          <v-img
                            :src="p39"
                            style="width: 100%"
                          />
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-img
                            :src="p40"
                            style="width: 100%"
                          />
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12">
                          <v-img
                            :src="p41"
                            style="width: 100%"
                          />
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-carousel-item>
  
                  <!--Cuadro 13-->
                  <v-carousel-item>
                    <v-container>
                      <v-row>
                        <v-col>
                          <h2>PROPUESTA FINAL</h2>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12" sm="6" md="6">
                          <v-img
                            :src="p42"
                            style="width: 100%"
                          />
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-img
                            :src="p32"
                            style="width: 100%"
                          />
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-carousel-item>
                </v-carousel>
              </v-container>
            </div>
            </v-container>
        </dibox>

        <v-col 
          cols="6"
          sm="4"
          md="4"
          v-scrolls
          class="flex d-flex align-self-stretch">
            <v-card elevation="21" style="width: 100%" align="center">
              <video controls style="width: 100%; height: 200px">
                <source :src="p43" type="video/mp4" />
              </video>
              <v-card-title
                class="text-pre-wrap"
                style="word-break: break-word"
              >
                SIMULACIÓN PARA EMPRESA INDUSTRIAL
              </v-card-title>
            </v-card>
        </v-col>
      </v-row>
    </v-container>
    <dibox v-show="dialog" @close="hideDialog()">
      <v-container style="overflow-x:hidden; width: 80vw">
        <div>
          <div class="d-flex justify-space-between">
                <v-card-title class="d-flex justify-end">CD GLORIA</v-card-title>
                <v-card-actions class="d-flex justify-start">
                  <v-btn
                    style="color: rgb(203, 50, 52)"
                    variant="text"
                    @click="hideDialog()"
                  >
                    <h1>X</h1>
                  </v-btn>
                </v-card-actions>
              </div>
              <v-divider></v-divider>
              <v-container>
                <v-carousel hide-delimiters height="auto" style="width:100%" show-arrows="hover">
                  <v-carousel-item>
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="6" md="6">
                          <h2>Centro de distribución más alto del Perú</h2>
                          <ol
                            align="justify"
                            style="
                              padding-right: 3vh;
                              padding-left: 3vh;
                              font-size: 100%;
                            "
                          >
                            <li>Capacidad 5000 ''s</li>
                            <li>Almacén Autoportante</li>
                            <li>Altura; 19 m</li>
                            <li>
                              Almacenamiento
  
                              <ol
                                align="justify"
                                style="
                                  padding-right: 3vh;
                                  padding-left: 6vh;
                                  font-size: 100%;
                                "
                              >
                                <li>Sistema Satelital</li>
                                <li>Estantería Selectiva</li>
                              </ol>
                            </li>
                            <li>Equipos MH Trilaterales</li>
                            <li>
                              Equipos de Rampa
                              <ol
                                align="justify"
                                style="
                                  padding-right: 3vh;
                                  padding-left: 6vh;
                                  font-size: 100%;
                                "
                              >
                                <li>Niveladores Verticales</li>
                                <li>Puertas Seccionales</li>
                                <li>Abrigos</li>
                              </ol>
                            </li>
                          </ol>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-img
                            :src="p13"
                            style="height: 100%; min-height: 287px"
                          />
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-carousel-item>
                </v-carousel>
              </v-container>
              </div>
              </v-container>
        </dibox>
  </div>
  </template>
  <script>
  import video1 from "../assets/imagenes/super4.mp4";
  import video2 from "../assets/imagenes/proyect.mp4";
  import video3 from "../assets/imagenes/losa.mp4";
  import video4 from "../assets/imagenes/autoportante.mp4";
  import video5 from "../assets/imagenes/oficinas.mp4";
  import video6 from "../assets/imagenes/fachada.mp4";
  import video7 from "../assets/imagenes/cantiller.mp4";
  import video8 from "../assets/imagenes/tijerales.mp4";
  import video9 from "../assets/imagenes/cubierta.mp4";
  import video10 from "../assets/imagenes/interiores.mp4";
  import video11 from "../assets/imagenes/patio-anexo.mp4";
  import video12 from "../assets/imagenes/proyect.mp4";
  import ima1 from "../assets/imagenes/proyecto3.jpg";
  import ima2 from "../assets/Gloria/Gloria.jpg";
  import ima3 from "../assets/imagenes/proyecto1.jpg";
  import ima4 from "../assets/imagenes/proyecto2.jpg";
  import ima5 from "../assets/imagenes/proyecto3.jpg";
  import ima6 from "../assets/imagenes/proyecto5.jpg";
  import ima7 from "../assets/imagenes/proyecto6.jpg";
  import ima8 from "../assets/imagenes/proyecto7.jpg";
  import ima9 from "../assets/imagenes/proyecto8.jpg";
  import ima10 from "../assets/imagenes/proyecto9.jpg";
  import ima11 from "../assets/imagenes/proyecto10.jpg";
  import ima12 from "../assets/imagenes/proyecto11.jpg";
  import ima13 from "../assets/imagenes/proyecto12.jpg";
  import ima14 from "../assets/imagenes/gif1.gif";
  import ima15 from "../assets/imagenes/proyecto18.jpg";
  import ima16 from "../assets/imagenes/proyecto19.jpg";
  import ima17 from "../assets/imagenes/proyecto20.jpg";
  import ima18 from "../assets/imagenes/gif2.gif";
  import ima19 from "../assets/imagenes/proyecto25.jpg";
  import ima20 from "../assets/imagenes/proyecto26.jpg";
  import ima21 from "../assets/imagenes/proyecto40.jpeg";
  import ima22 from "../assets/imagenes/proyecto27.jpg";
  import ima23 from "../assets/imagenes/proyecto28.jpg";
  import ima24 from "../assets/imagenes/proyecto29.jpg";
  import ima25 from "../assets/imagenes/proyecto37.jpg";
  import ima26 from "../assets/imagenes/proyecto38.jpg";
  import ima27 from "../assets/imagenes/proyecto39.jpg";
  import ima28 from "../assets/imagenes/proyecto30.jpg";
  import ima29 from "../assets/imagenes/proyecto31.jpg";
  import ima30 from "../assets/imagenes/proyecto32.jpg"; 
  import ima31 from "../assets/imagenes/gif3.gif";
  import ima32 from "../assets/imagenes/poderosa.jpg"; 
  import { defineComponent } from "vue";
  export default defineComponent({
    components: {},
    data() {
      return {
        dialog0: false,
        p1: video1,
        p2: video2,
        p3: video3,
        p4: video4,
        p5: video5,
        p6: video6,
        p7: video7,
        p8: video8,
        p9: video9,
        p10: video10,
        p11: video11,
        p12: ima1,
        p13: ima2,
        p14: ima3,
        p15: ima4,
        p16: ima5,
        p17: ima6,
        p18: ima7,
        p19: ima8,
        p20: ima9,
        p21: ima10,
        p22: ima11,
        p23: ima12,
        p24: ima13,       
        p25: ima14,       
        p26: ima15,
        p27: ima16,
        p28: ima17,
        p29: ima18,
        p30: ima19,
        p31: ima20,
        p32: ima21,
        p33: ima22,
        p34: ima23,
        p35: ima24,
        p36: ima25,
        p37: ima26,
        p38: ima27,
        p39: ima28,
        p40: ima29,
        p41: ima30,
        p42: ima31,
        p43: video12,
        p44: ima32,
        dialog: false,
        dialog1: false,
        dialog2: false,
        dialog3: false,
        dialog4: false,
        dialog5: false,
        scrollPosition: 0,
      };
    },
      unmounted(){
    document.body.style.position = 'static';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflowY = '';
        window.scrollTo(0, this.scrollPosition);
  },
    methods: {
      showDialog() {
        this.scrollPosition = window.pageYOffset;
        this.dialog = true;
        document.body.style.position = 'fixed';
        document.body.style.top = `-${this.scrollPosition}px`;
        document.body.style.width = '100%';
        document.body.style.overflowY = 'hidden';
    },
    showDialog1() {
        this.scrollPosition = window.pageYOffset;
        this.dialog0 = true;
        document.body.style.position = 'fixed';
        document.body.style.top = `-${this.scrollPosition}px`;
        document.body.style.width = '100%';
        document.body.style.overflowY = 'hidden';
    },
    showDialog2() {
        this.scrollPosition = window.pageYOffset;
        this.dialog1 = true;
        document.body.style.position = 'fixed';
        document.body.style.top = `-${this.scrollPosition}px`;
        document.body.style.width = '100%';
        document.body.style.overflowY = 'hidden';
    },
    showDialog3() {
        this.scrollPosition = window.pageYOffset;
        this.dialog2 = true;
        document.body.style.position = 'fixed';
        document.body.style.top = `-${this.scrollPosition}px`;
        document.body.style.width = '100%';
        document.body.style.overflowY = 'hidden';
    },
    showDialog4() {
        this.scrollPosition = window.pageYOffset;
        this.dialog3 = true;
        document.body.style.position = 'fixed';
        document.body.style.top = `-${this.scrollPosition}px`;
        document.body.style.width = '100%';
        document.body.style.overflowY = 'hidden';
    },
    showDialog5() {
        this.scrollPosition = window.pageYOffset;
        this.dialog4 = true;
        document.body.style.position = 'fixed';
        document.body.style.top = `-${this.scrollPosition}px`;
        document.body.style.width = '100%';
        document.body.style.overflowY = 'hidden';
    },
    showDialog6() {
        this.scrollPosition = window.pageYOffset;
        this.dialog5 = true;
        document.body.style.position = 'fixed';
        document.body.style.top = `-${this.scrollPosition}px`;
        document.body.style.width = '100%';
        document.body.style.overflowY = 'hidden';
    },
    hideDialog() {
        this.dialog = false;
        document.body.style.position = 'static';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflowY = '';
        window.scrollTo(0, this.scrollPosition);
    },
    hideDialog1() {
        this.dialog0 = false;
        document.body.style.position = 'static';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflowY = '';
        window.scrollTo(0, this.scrollPosition);
    },
    hideDialog2() {
        this.dialog1 = false;
        document.body.style.position = 'static';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflowY = '';
        window.scrollTo(0, this.scrollPosition);
    },
    hideDialog3() {
        this.dialog2 = false;
        document.body.style.position = 'static';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflowY = '';
        window.scrollTo(0, this.scrollPosition);
    },
    hideDialog4() {
        this.dialog3 = false;
        document.body.style.position = 'static';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflowY = '';
        window.scrollTo(0, this.scrollPosition);
    },
    hideDialog5() {
        this.dialog4 = false;
        document.body.style.position = 'static';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflowY = '';
        window.scrollTo(0, this.scrollPosition);
    },
    hideDialog6() {
        this.dialog5 = false;
        document.body.style.position = 'static';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflowY = '';
        window.scrollTo(0, this.scrollPosition);
    },
    }
  });
  </script>
  <style scoped>
  .before-enter {
    opacity: 0;
    transform: translateX(100px);
    transition: all 1s ease-out;
  }
  .enter {
    opacity: 1;
    transform: translateX(0px);
  }
  </style>
