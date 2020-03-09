<template>
  <v-content>
    <template>
      <v-parallax height="300" src="/static/building1.jpg">
        <h2 class="text-center  display-1">
          VISITS TO PROMOTE DoIC
        </h2></v-parallax
      >
    </template>

    <template>
      <v-card flat>
        <v-toolbar color="cyan accent-4" dark flat>
          <v-tabs v-model="tabs" background-color="transparent" grow>
            <v-tab>
              Faculty Visits
            </v-tab>
            <v-tab>
              Delegate Visits
            </v-tab>
          </v-tabs>
        </v-toolbar>

        <v-tabs-items v-model="tabs">
          <v-tab-item>
            <v-card flat>
              <v-card-text>
                <v-flex>
                  <v-content>
                    <section row wrap text-center mb-4>
                      <v-flex xs12>
                        <v-container grid-list-xl>
                          <v-flex primary-title class="layout justify-center">
                            <div class="headline text-center pb-5">
                              <v-icon
                                x-large
                                class="blue--text text--lighten-2 pa-2"
                                >mdi-school</v-icon
                              >
                              <br />
                              ITMO University(Information Technologies,
                              Mechanics and Optics)
                            </div>
                          </v-flex>
                          <v-layout row wrap>
                            <v-flex xs12 md6>
                              <v-card class="elevation-0 transparent">
                                <v-img
                                  src="/static/photos/college/itmo.jpg"
                                ></v-img>
                              </v-card>
                            </v-flex>
                            <v-flex xs12 md6>
                              <v-card class="elevation-0 transparent">
                                <v-card-text class="detail">
                                  <ul>
                                    <li>Type: State University</li>
                                    <li>Location: St Petersburg</li>
                                    <li>Established: 1900</li>
                                    <li>
                                      Rankings: Top 5 Russian (THE), Top 20
                                      Eurasia (THE), Among Shanghai Ranking, QS
                                      subject ranked
                                    </li>
                                    <li>
                                      One of 15 universities in Russia in 5-100
                                      excellence program of Govt. of Russia
                                    </li>
                                    <li>3+1+1 program, 1+1 program</li>
                                    <li>
                                      ACM training program, Organise Joint
                                      summer camps, ITMO Technopark and AIC work
                                      together
                                    </li>
                                  </ul>
                                </v-card-text>
                              </v-card>
                            </v-flex>
                          </v-layout>
                        </v-container>
                      </v-flex>
                    </section>
                  </v-content>

                  <v-content pb-5>
                    <section row wrap text-center mb-4>
                      <v-flex xs12>
                        <v-container grid-list-xl>
                          <v-flex primary-title class="layout justify-center">
                            <div class="headline text-center pb-5">
                              <v-icon
                                x-large
                                class="blue--text text--lighten-2 pa-2"
                                >mdi-school</v-icon
                              ><br />
                              Moscow State University of Railway Engineering
                              (MIIT)
                            </div>
                          </v-flex>
                          <v-layout row wrap>
                            <v-flex xs12 md6>
                              <v-card class="elevation-0 transparent">
                                <v-img
                                  src="/static/photos/college/miit.jpg"
                                ></v-img>
                              </v-card>
                            </v-flex>
                            <v-flex xs12 md6>
                              <v-card class="elevation-0 transparent">
                                <v-card-text class="detail">
                                  <ul>
                                    <li>Type: State University</li>
                                    <li>Location: Moscow</li>
                                    <li>Established: 1896</li>
                                    <li>Rankings: BRICS 301-350</li>
                                    <li>Rector: Minister in DUMA</li>
                                  </ul>
                                </v-card-text>
                              </v-card>
                            </v-flex>
                          </v-layout>
                        </v-container>
                      </v-flex>
                    </section>
                  </v-content>

                  <v-content pb-5>
                    <section row wrap text-center mb-4>
                      <v-flex xs12>
                        <v-container grid-list-xl>
                          <v-flex primary-title class="layout justify-center">
                            <div class="headline text-center pb-5">
                              <v-icon
                                x-large
                                class="blue--text text--lighten-2 pa-2"
                                >mdi-school</v-icon
                              ><br />
                              The Russian Presidential Academy of National
                              Economy and Public Administration (RANEPA)
                            </div>
                          </v-flex>
                          <v-layout row wrap>
                            <v-flex xs12 md6>
                              <v-card class="elevation-0 transparent">
                                <v-img
                                  src="/static/photos/college/ranepa.jpg"
                                ></v-img>
                              </v-card>
                            </v-flex>
                            <v-flex xs12 md6>
                              <v-card class="elevation-0 transparent">
                                <v-card-text class="detail">
                                  <ul>
                                    <li>Type: State University</li>
                                    <li>Location: Moscow</li>
                                    <li>EEstablished: 2010</li>
                                    <li>Rankings: BRICS 90</li>
                                  </ul>
                                </v-card-text>
                              </v-card>
                            </v-flex>
                          </v-layout>
                        </v-container>
                      </v-flex>
                    </section>
                  </v-content>

                  <v-content pb-5>
                    <section row wrap text-center mb-4>
                      <v-flex xs12>
                        <v-container grid-list-xl>
                          <v-flex primary-title class="layout justify-center">
                            <div class="headline text-center pb-5">
                              <v-icon
                                x-large
                                class="blue--text text--lighten-2 pa-2"
                                >mdi-school</v-icon
                              ><br />
                              Small Business Association of Australia (SBAA)
                            </div>
                          </v-flex>
                          <v-layout row wrap>
                            <v-flex xs12 md6>
                              <v-card class="elevation-0 transparent">
                                <v-img src="/static/photos/9.png"></v-img>
                              </v-card>
                            </v-flex>
                            <v-flex xs12 md6>
                              <v-card class="elevation-0 transparent">
                                <v-card-text class="detail">
                                  <ul>
                                    <li>
                                      Delegation visited during Nov. 2018 Final
                                      year projects, Paid Internships and other
                                      matters were discussed during the visit
                                    </li>
                                    <li>MoU signed on 28.03.2019</li>
                                  </ul>
                                </v-card-text>
                              </v-card>
                            </v-flex>
                          </v-layout>
                        </v-container>
                      </v-flex>
                    </section>
                  </v-content>

                  <v-content pb-5>
                    <section row wrap text-center mb-4>
                      <v-flex xs12>
                        <v-container grid-list-xl>
                          <v-flex primary-title class="layout justify-center">
                            <div class="headline text-center pb-5">
                              <v-icon
                                x-large
                                class="blue--text text--lighten-2 pa-2"
                                >mdi-school</v-icon
                              ><br />
                              Gubkin Russian State University of Oil and Gas
                            </div>
                          </v-flex>
                          <v-layout row wrap>
                            <v-flex xs12 md6>
                              <v-card class="elevation-0 transparent">
                                <v-img
                                  src="/static/photos/college/gas.jpg"
                                ></v-img>
                              </v-card>
                            </v-flex>
                            <v-flex xs12 md6>
                              <v-card class="elevation-0 transparent">
                                <v-card-text class="detail">
                                  <ul>
                                    <li>
                                      Collaboration with Atal Incubation Centre
                                      has been worked out
                                    </li>
                                    <li>MOU signed on 22.02.2019</li>
                                  </ul>
                                </v-card-text>
                              </v-card>
                            </v-flex>
                          </v-layout>
                        </v-container>
                      </v-flex>
                    </section>
                  </v-content>

                  <v-content pb-5>
                    <section row wrap text-center mb-4>
                      <v-flex xs12>
                        <v-container grid-list-xl>
                          <v-flex primary-title class="layout justify-center">
                            <div class="headline text-center pb-5">
                              <v-icon
                                x-large
                                class="blue--text text--lighten-2 pa-2"
                                >mdi-school</v-icon
                              ><br />
                              Ecole Centrale De Nantes, France (ECN)
                            </div>
                          </v-flex>
                          <v-layout row wrap>
                            <v-flex xs12 md6>
                              <v-card class="elevation-0 transparent">
                                <v-img
                                  src="/static/photos/college/ecn.jpg"
                                ></v-img>
                              </v-card>
                            </v-flex>
                            <v-flex xs12 md6>
                              <v-card class="elevation-0 transparent">
                                <v-card-text class="detail">
                                  <ul>
                                    <li>
                                      2 Students have applied for Internship
                                    </li>
                                    <li>MOU signed on 06.04.2018</li>
                                  </ul>
                                </v-card-text>
                              </v-card>
                            </v-flex>
                          </v-layout>
                        </v-container>
                      </v-flex>
                    </section>
                  </v-content>

                  <v-content pb-5>
                    <section row wrap text-center mb-4>
                      <v-flex xs12>
                        <v-container grid-list-xl>
                          <v-flex primary-title class="layout justify-center">
                            <div class="headline text-center pb-5">
                              <v-icon
                                x-large
                                class="blue--text text--lighten-2 pa-2"
                                >mdi-school</v-icon
                              ><br />
                              Association of Chartered Certified Accountants
                              (ACCA) and International Skills Development
                              Corporation (ISDC)
                            </div>
                          </v-flex>
                          <v-layout row wrap>
                            <v-flex xs12 md6>
                              <v-card class="elevation-0 transparent">
                                <v-img src="/static/photos/9.png"></v-img>
                              </v-card>
                            </v-flex>
                            <v-flex xs12 md6>
                              <v-card class="elevation-0 transparent">
                                <v-card-text class="detail">
                                  <ul>
                                    <li>
                                      The ISDC, UK is the learning partner with
                                      MUJ to facilitate the training and
                                      learning for B.Com. Hons Accounting by
                                      providing all the relevant learning
                                      material for ACCA and helping with Train
                                      the trainer programme.
                                    </li>
                                    <li>
                                      B.Com Hons in Accounting Program is
                                      integrated with ACCA, UK
                                    </li>
                                  </ul>
                                </v-card-text>
                              </v-card>
                            </v-flex>
                          </v-layout>
                        </v-container>
                      </v-flex>
                    </section>
                  </v-content>

                  <v-content pb-5>
                    <section row wrap text-center mb-4>
                      <v-flex xs12>
                        <v-container grid-list-xl>
                          <v-flex primary-title class="layout justify-center">
                            <div class="headline text-center pb-5">
                              <v-icon
                                x-large
                                class="blue--text text--lighten-2 pa-2"
                                >mdi-school</v-icon
                              ><br />
                              ESTACA – Ecole Superieure des Techniques
                              Aeronautiques et de Construction Automobile,
                              Montigny – le- Bretonneux, France
                            </div>
                          </v-flex>
                          <v-layout row wrap>
                            <v-flex xs12 md6>
                              <v-card class="elevation-0 transparent">
                                <v-img
                                  src="/static/photos/college/estaca.jpg"
                                ></v-img>
                              </v-card>
                            </v-flex>
                            <v-flex xs12 md6>
                              <v-card class="elevation-0 transparent">
                                <v-card-text class="detail">
                                  <ul>
                                    <li>
                                      Faculty invited to participate in their
                                      International Week and teach. 4 Students
                                      have gone for exchange Programme
                                    </li>
                                    <li>
                                      1 student from ESTACA Received so far and
                                      one more will be joining in ensuing
                                      semester
                                    </li>
                                  </ul>
                                </v-card-text>
                              </v-card>
                            </v-flex>
                          </v-layout>
                        </v-container>
                      </v-flex>
                    </section>
                  </v-content>

                  <v-content pb-5>
                    <section row wrap text-center mb-4>
                      <v-flex xs12>
                        <v-container grid-list-xl>
                          <v-flex primary-title class="layout justify-center">
                            <div class="headline text-center pb-5">
                              <v-icon
                                x-large
                                class="blue--text text--lighten-2 pa-2"
                                >mdi-school</v-icon
                              ><br />
                              University of Applied Sciences, Western
                              Switzerland
                            </div>
                          </v-flex>
                          <v-layout row wrap>
                            <v-flex xs12 md6>
                              <v-card class="elevation-0 transparent">
                                <v-img
                                  src="/static/photos/college/app.jpg"
                                ></v-img>
                              </v-card>
                            </v-flex>
                            <v-flex xs12 md6>
                              <v-card class="elevation-0 transparent">
                                <v-card-text class="detail">
                                  <ul>
                                    <li>
                                      Summer University Programme for academic
                                      and research association
                                    </li>
                                    <li>
                                      17 students have visited Singapore and 9
                                      students have visited MUJ from Singapore
                                    </li>
                                    <li>
                                      Proposal for this years Summer Programme
                                      at Switzerland has been approved
                                    </li>
                                  </ul>
                                </v-card-text>
                              </v-card>
                            </v-flex>
                          </v-layout>
                        </v-container>
                      </v-flex>
                    </section>
                  </v-content>

                  <v-content pb-5>
                    <section row wrap text-center mb-4>
                      <v-flex xs12>
                        <v-container grid-list-xl>
                          <v-flex primary-title class="layout justify-center">
                            <div class="headline text-center pb-5">
                              <v-icon
                                x-large
                                class="blue--text text--lighten-2 pa-2"
                                >mdi-school</v-icon
                              ><br />
                              Monash University, Melbourne
                            </div>
                          </v-flex>
                          <v-layout row wrap>
                            <v-flex xs12 md6>
                              <v-card class="elevation-0 transparent">
                                <v-img
                                  src="/static/photos/college/monash.jpg"
                                ></v-img>
                              </v-card>
                            </v-flex>
                            <v-flex xs12 md6>
                              <v-card class="elevation-0 transparent">
                                <v-card-text class="detail">
                                  <ul>
                                    <li>
                                      Public Research University, 100 Research
                                      Centers, Part of G8, THE( TOP 100)in TOP 1
                                      % of the World
                                    </li>
                                    <li>Founded in 1958</li>
                                    <li>
                                      Initiated Discussion for Semester Abroad
                                      Programme
                                    </li>
                                  </ul>
                                </v-card-text>
                              </v-card>
                            </v-flex>
                          </v-layout>
                        </v-container>
                      </v-flex>
                    </section>
                  </v-content>

                  <v-content pb-5>
                    <section row wrap text-center mb-4>
                      <v-flex xs12>
                        <v-container grid-list-xl>
                          <v-flex primary-title class="layout justify-center">
                            <div class="headline text-center pb-5">
                              <v-icon
                                x-large
                                class="blue--text text--lighten-2 pa-2"
                                >mdi-school</v-icon
                              ><br />
                              University Of Wollongong & Sydney Business School
                            </div>
                          </v-flex>
                          <v-layout row wrap>
                            <v-flex xs12 md6>
                              <v-card class="elevation-0 transparent">
                                <v-img
                                  src="/static/photos/college/wolf.jpg"
                                ></v-img>
                              </v-card>
                            </v-flex>
                            <v-flex xs12 md6>
                              <v-card class="elevation-0 transparent">
                                <v-card-text class="detail">
                                  <ul>
                                    <li>
                                      Ranking(QS World subject ranking): In top
                                      200 University
                                    </li>
                                    <li>
                                      Location: UOW Main campus,
                                      Wollongong(Sydney)
                                    </li>
                                    <li>
                                      Proposal for Articulation agreement for
                                      Integrated Programme 3+1+1 received
                                    </li>
                                  </ul>
                                </v-card-text>
                              </v-card>
                            </v-flex>
                          </v-layout>
                        </v-container>
                      </v-flex>
                    </section>
                  </v-content>

                  <v-content pb-5>
                    <section row wrap text-center mb-4>
                      <v-flex xs12>
                        <v-container grid-list-xl>
                          <v-flex primary-title class="layout justify-center">
                            <div class="headline text-center pb-5">
                              <v-icon
                                x-large
                                class="blue--text text--lighten-2 pa-2"
                                >mdi-school</v-icon
                              ><br />
                              Regency International Centre
                            </div>
                          </v-flex>
                          <v-layout row wrap>
                            <v-flex xs12 md6>
                              <v-card class="elevation-0 transparent">
                                <v-img src="/static/photos/9.png"></v-img>
                              </v-card>
                            </v-flex>
                            <v-flex xs12 md6>
                              <v-card class="elevation-0 transparent">
                                <v-card-text class="detail">
                                  <ul>
                                    <li>
                                      Visit of joint campus of ICHM, Le Cordon
                                      Bleu and TAFE Hospitality School
                                    </li>
                                    <li>Outcome: (MOU with ICHM)</li>
                                    <li>
                                      Summer School with Tafe, Hospitality
                                    </li>
                                  </ul>
                                </v-card-text>
                              </v-card>
                            </v-flex>
                          </v-layout>
                        </v-container>
                      </v-flex>
                    </section>
                  </v-content>

                  <v-content pb-5>
                    <section row wrap text-center mb-4>
                      <v-flex xs12>
                        <v-container grid-list-xl>
                          <v-flex primary-title class="layout justify-center">
                            <div class="headline text-center pb-5">
                              <v-icon
                                x-large
                                class="blue--text text--lighten-2 pa-2"
                                >mdi-school</v-icon
                              ><br />
                              Flinders University
                            </div>
                          </v-flex>
                          <v-layout row wrap>
                            <v-flex xs12 md6>
                              <v-card class="elevation-0 transparent">
                                <v-img
                                  src="/static/photos/college/flinders.jpg"
                                ></v-img>
                              </v-card>
                            </v-flex>
                            <v-flex xs12 md6>
                              <v-card class="elevation-0 transparent">
                                <v-card-text class="detail">
                                  <ul>
                                    <li>Public University Founded in 1966</li>
                                    <li>
                                      Ranked Within World TOP 500, TOP 10 In
                                      Australia, THE (251-300)
                                    </li>
                                    <li>
                                      MOU Existing, Discussed Special
                                      Scholarship for MUJ students and Exchange
                                      Programme
                                    </li>
                                    <li>
                                      Indo Australian Workshop has been
                                      organized
                                    </li>
                                    <li>
                                      1 Faculty from each side has visited as
                                      part of collaboration
                                    </li>
                                  </ul>
                                </v-card-text>
                              </v-card>
                            </v-flex>
                          </v-layout>
                        </v-container>
                      </v-flex>
                    </section>
                  </v-content>
                </v-flex>
              </v-card-text>
            </v-card>
          </v-tab-item>

          <v-tab-item>
            <v-card flat>
              <v-card-text>
                <v-flex>
                  <v-content>
                    <section row wrap text-center mb-4>
                      <v-flex xs12>
                        <v-container grid-list-xl>
                          <v-flex primary-title class="layout justify-center">
                            <div class="headline text-center pb-5">
                              <v-icon
                                x-large
                                class="blue--text text--lighten-2 pa-2"
                                >mdi-school</v-icon
                              ><br />
                              Australian Student Delegation
                            </div>
                          </v-flex>
                          <v-layout row wrap>
                            <v-flex xs12 md6>
                              <v-card class="elevation-0 transparent">
                                <v-img src="/static/photos/3.png"></v-img>
                              </v-card>
                            </v-flex>
                            <v-flex xs12 md6>
                              <v-card class="elevation-0 transparent">
                                <v-card-text class="detail">
                                  <ul>
                                    <li>
                                      26 students from 11 different Australian
                                      Universities visited MUJ during December
                                      2018
                                    </li>
                                    <li>
                                      8 female students from Australian
                                      universities visited MUJ during February
                                      2019
                                    </li>
                                  </ul>
                                </v-card-text>
                              </v-card>
                            </v-flex>
                          </v-layout>
                        </v-container>
                      </v-flex>
                      <v-flex xs12>
                        <v-container grid-list-xl>
                          <v-flex primary-title class="layout justify-center">
                            <div class="headline text-center pb-5">
                              <v-icon
                                x-large
                                class="blue--text text--lighten-2 pa-2"
                                >mdi-school</v-icon
                              ><br />
                              Lancaster University Visit-Explore India Program
                            </div>
                          </v-flex>
                          <v-layout row wrap>
                            <v-flex xs12 md6>
                              <v-card class="elevation-0 transparent">
                                <v-img src="/static/photos/4.png"></v-img>
                              </v-card>
                            </v-flex>
                            <v-flex xs12 md6>
                              <v-card class="elevation-0 transparent">
                                <v-card-text class="detail">
                                  <ul>
                                    <li>
                                      26 students from Lancaster University
                                      visited MUJ under Explore India Program
                                      during 2nd to 8th September 2018
                                    </li>
                                    <li>
                                      MAHE extended this program to MUJ campus
                                      and it was well organised.
                                    </li>
                                  </ul>
                                </v-card-text>
                              </v-card>
                            </v-flex>
                          </v-layout>
                        </v-container>
                      </v-flex>
                      <v-flex xs12>
                        <v-container grid-list-xl>
                          <v-flex primary-title class="layout justify-center">
                            <div class="headline text-center pb-5">
                              <v-icon
                                x-large
                                class="blue--text text--lighten-2 pa-2"
                                >mdi-school</v-icon
                              ><br />
                              Australian Education Expo
                            </div>
                          </v-flex>
                          <v-layout row wrap>
                            <v-flex xs12 md6>
                              <v-card class="elevation-0 transparent">
                                <v-img src="/static/photos/7.jpg"></v-img>
                              </v-card>
                            </v-flex>
                            <v-flex xs12 md6>
                              <v-card class="elevation-0 transparent">
                                <v-card-text class="detail">
                                  <ul>
                                    <li>
                                      28 Australian Universities were at Manipal
                                      University Jaipur and provided students
                                      with in-depth knowledge and guidance of
                                      admissions and scholarships
                                    </li>
                                    <li>
                                      Collaboration opportunities were explored
                                      with the participant Universities.
                                    </li>
                                  </ul>
                                </v-card-text>
                              </v-card>
                            </v-flex>
                          </v-layout>
                        </v-container>
                      </v-flex>
                    </section>
                  </v-content>
                </v-flex>
              </v-card-text>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </template>

    <v-container>
      <v-flex>
        <v-flex xs10 offset-xs1 pt-5 px-5>
          <h3 class="text-center">PHOTO GALLERY</h3>
        </v-flex>
      </v-flex>

      <v-carousel hide-delimiters>
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
          reverse-transition="fade-transition"
          transition="fade-transition"
          ><v-flex class="text-center">{{ item.txt }}</v-flex>
        </v-carousel-item>
      </v-carousel>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: "visits",
  data() {
    return {
      tabs: null,
      items: [
        {
          src: "/static/photos/visit/1.jpg"
        },
        {
          src: "/static/photos/visit/2.jpg"
        },
        {
          src: "/static/photos/visit/3.jpg"
        },
        {
          src: "/static/photos/visit/4.jpg"
        },
        {
          src: "/static/photos/visit/5.jpg"
        },
        {
          src: "/static/photos/visit/6.jpg"
        },
        /*  {
                src: '/static/photos/visit/7.jpg',
            }, */
        {
          src: "/static/photos/visit/8.jpg"
        },
        {
          src: "/static/photos/visit/9.jpg"
        },
        {
          src: "/static/photos/visit/10.jpg"
        },
        {
          src: "/static/photos/visit/11.jpg"
        },
        {
          src: "/static/photos/visit/12.jpg"
        },
        {
          src: "/static/photos/visit/13.jpg"
        }
      ]
    };
  }
};
</script>
