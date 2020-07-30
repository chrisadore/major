<template>
  <v-content>
    <template>
      <v-parallax height="300" src="/static/buildinglow.jpg">
        <h1 class="text-center display-1">ABOUT US</h1></v-parallax
      >
    </template>
<v-container wrap>
  
        <v-expansion-panels popout tile flat>
    <v-expansion-panel class=" grey lighten-2"
    >
      <v-expansion-panel-header><h2 class=" display-1 pa-3 pink--text text--darken-3">
         EXPLORE
        </h2></v-expansion-panel-header>
      <v-expansion-panel-content>
       
             <section row wrap mb-4 class="grey lighten-2 ma-1">
        
        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row wrap align-baseline>
               <v-flex class="  xs12 md6" 
            v-for="item in explore"
            :key="item.title"
            router
            :href="item.link">
                <v-sheet
          class="transparent pink--text text--darken-4"
          
          outlined
          tile
        >
          
         <h4> {{item.title}}</h4>

          <v-list
          class="transparent">
        <v-list-item
          v-for="items in item.subs"
            :key="items.title"
            router
            :href="items.link"
          link
        >

          <v-list-item-content>
            <v-list-item-title> <v-icon>mdi-arrow-right-bold</v-icon>
              {{ items.subtitle }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

        </v-sheet>
              </v-flex>     

            </v-layout>
          </v-container>
        </v-flex>
      </section>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
    </v-container>
    
      <v-container >
          
       <v-flex>
      <v-flex xs10 offset-xs1 pt-5 px-5>
        <H3 class="text-center display-1">MANIPAL UNIVERSITY JAIPUR</H3>
      </v-flex>
      <v-container class="pb-5 body-2">
        <p>The Manipal Education Group is an established leader in the field of education, research and healthcare. In a span of 
            over six decades, it has transformed the lives of more than 3,00,000 students from over 59 countries. The group includes 
            five Universities - Manipal Academy of Higher Education (MAHE, Karnataka), Sikkim Manipal University (Sikkim), American 
            University of Antigua (Caribbean Islands), Manipal International University (Malaysia) and Manipal University Jaipur (Jaipur).</p>
        <p>Manipal University Jaipur (MUJ) was launched in 2011 on an invitation from the Government of Rajasthan, as a self-financed State 
            University. MUJ has redefined academic excellence in the region, with the Manipal way of learning; one that inspires students of 
            all disciplines to learn and innovate through hands on practical experience.</p>
        <p>Jaipur, being one of the fastest growing cities in India, has increasing demand for quality higher education in the region. 
            Following an allotment of 122 Acres of land at Dehmi Kalan village near Jaipur, the permanent campus of the University has 
            come up at a fast pace and is by far one of the best campuses in the region.</p>
        <p>The multi-disciplinary university offers career-oriented courses at all levels, i.e., UG, PG and doctoral and across diverse streams, 
            including Engineering, Architecture, Planning, Fashion Design, Fine Arts, Hospitality, Humanities, Journalism and Mass Communication, 
            Basic Sciences, Law, Commerce, Computer Applications, Management, etc.  Some PG programmes are also available in the research mode.</p>
        <p>MUJ boasts of best-in-class infrastructure, including state-of-the-art research facilities and a modern, digital library. In line with 
            Manipal University's legacy of providing quality education to its students, the campus uses the latest in technology to impart education.</p>

            <v-content>
                <v-parallax height="400" src="/static/drop.jpg">
        
          <h2 class="text-center display-1 pa-2 white--text">
         <div
               class="text-center">
               <v-btn
               x-large
               height="60px"
               width="250px"
               tile
              depressed
                    rel="noopener noreferrer"
                    target="_blank"
              class=" white--text mt-5"
              color="#c40018"
              href="https://jaipur.manipal.edu/"
              >Visit Our Webite!</v-btn
            >
              </div>
        </h2>
        
      </v-parallax>
            </v-content>
      </v-container>
      </v-flex>
      
<v-flex>
        <v-flex xs10 offset-xs1 pt-5 px-5>
        <h3 class="text-center display-1">DIRECTORATE OF INTERNATIONAL COLLOBORATIONS
</h3>
      </v-flex>
      <v-container  class="pb-5 body-2">
        <p>The Directorate of International Collaborations is established to promote internationalization and partnerships with 
            international institutes. The Directorate facilitates collaboration and partnerships with institutions globally for 
            student and faculty exchange, semester abroad Programme, student mobility and higher education opportunities through 
            signing of MoU with institutions and organizations. The Directorate is headed by Mr. Ajay Kumar Sharma, Director and 
            supported by Dr. Santosh Patil, Deputy Director and Dr. Praveen Surolia, Assistant Director. A team of faculty members 
            acting as nucleus members further strengthen and support the activities of the Directorate.</p>

            
          <v-container grid-list-xl>
            <v-layout row wrap align-baseline>
                
              <v-flex xs12 md6>
                <v-card class="elevation-0 transparent">
                  <v-card-title primary-title class="layout justify-center">
                    <div class=" display-1">Directorate</div>
                  </v-card-title>
                  <v-container>
                    <template>
                      <v-flex offset-xs2>
                        <v-flex>
                          <v-container
                            ><v-row>
                              <v-col cols="10" class="purple lighten-2">
                                <h4
                                  class="text-center title white--text font-weight-light"
                                >
                                  Director
                                </h4>
                              </v-col>
                            </v-row>
                          </v-container>
                        </v-flex>

                        <v-flex>
                          <v-container>
                            <v-row>
                              <v-col
                                cols="10"
                                md="5"
                                class="amber lighten-1 justify-end"
                              >
                                <h4
                                  class="text-center title white--text font-weight-light"
                                >
                                  Deputy Director
                                </h4>
                              </v-col>

                              <v-col
                                cols="10"
                                md="5"
                                class="orange lighten-1 justify-end"
                              >
                                <h4
                                  class="text-center title white--text font-weight-light right"
                                >
                                 Assistant Director
                                </h4>
                              </v-col>
                            </v-row>
                          </v-container>
                        </v-flex>
                        <v-flex>
                          <v-container>
                            <v-row>
                              <v-col class="blue lighten-1" cols="10" md="5">
                                <h4
                                  class="text-center title white--text font-weight-light right"
                                >
                                  Nucleus Members
                                </h4>
                              </v-col>
                              <v-col class="cyan lighten-1" cols="10" md="5">
                                <h4
                                  class="text-center title white--text font-weight-light right"
                                >
                                  Nodal Officers
                                </h4>
                              </v-col>
                            </v-row>
                          </v-container>
                        </v-flex>
                        <v-flex>
                          <v-container>
                            <v-row>
                              <v-col
                                cols="10"
                                class="pink accent-2 justify-end"
                              >
                                <h4
                                  class="text-center title white--text font-weight-light right"
                                >
                                  IAESTE (MUJ) <br />
                                  Student Secretary <br />
                                </h4>
                              </v-col>
                            </v-row>
                          </v-container>
                        </v-flex>
                      </v-flex>
                    </template>
                  </v-container>
                </v-card>
              </v-flex>

              <v-flex xs12 md6>
                <v-card class="elevation-0 transparent">
                  <v-card-title primary-title class="layout justify-center">
                    <div class=" display-1 mb-5">MoUs</div>
                  </v-card-title>
                  <v-container>
                    <v-flex  class="text-center">
          
                        <iframe  class="hidden-xs-only && hidden-sm-only" src="https://www.google.com/maps/d/u/0/embed?mid=16-bcEKK0Fkbx3zxJSGHdJdXq4E9yE1Jf" width="500" height="390"></iframe>
                        
                        <iframe  class="hidden-md-and-up" src="https://www.google.com/maps/d/u/0/embed?mid=16-bcEKK0Fkbx3zxJSGHdJdXq4E9yE1Jf" width="250" height="300"></iframe>
                        
        </v-flex>
                    <template>
                      <div class="text-center pt-5">
                        <v-bottom-sheet v-model="sheet" inset scrollable>
                          <template v-slot:activator="{ on }">
                            <v-btn
                              color="orange"
                              dark
                              v-on="on"
                              depressed
                              outlined
                            >
                              Open List
                            </v-btn>
                          </template>
                          <v-card class="text-center" height="450px">
                            <v-card-text>
                              <v-btn
                                class="mt-6"
                                text
                                color="error"
                                @click="sheet = !sheet"
                                fab
                                large
                              >
                                close
                              </v-btn>
                              <div
                                class="my-3 mx-auto"
                                v-for="item in countries"
                                :key="item.name"
                              >
                                <v-list-item two-line>
                                  <v-list-item-content>
                                    <v-list-item-title>{{
                                      item.name
                                    }}</v-list-item-title>
                                    <v-list-item-subtitle
                                      >MoU(s):
                                      {{ item.mou }}</v-list-item-subtitle
                                    >
                                  </v-list-item-content>
                                </v-list-item>
                                <v-divider></v-divider>
                              </div>
                              <v-btn
                                class="mt-6"
                                text
                                color="error"
                                @click="sheet = !sheet"
                                fab
                                large
                              >
                                close
                              </v-btn>
                            </v-card-text>
                          </v-card>
                        </v-bottom-sheet>
                      </div>
                    </template>
                  </v-container>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>

          <v-container>
              <p>The nodal officer and Nucleus member initiates, coordinates and keeps track of activities with respect to the MoU. 
                  The nodal officers submit a quarterly report to Advisor- International Programme. </p>

                  <p>With international tie ups the Directorate facilitates networking of students and faculty across partner 
                      institutions and impart training to gain practical experience in international work environment, fast changing 
                      industrial scenarios, academic and industrial research. The Directorate organizes and coordinates several activities 
                      and programmes to improve social and cultural skills of all stakeholders like International Culture Day, Cross Cultural 
                      Culinary workshops, Cultural Immersion Trips and Explore India Programmes. The Directorate on periodic basis organizes 
                      presentations and interaction session of academic and industry partners with both students and faculty of MUJ. 
                      Interaction of visiting guests with leadership team of MUJ is arranged to further strengthen the ties at the highest 
                      level leading to MoU’s or Agreements. Departmental heads confirm credit exchange possibilities and parity (Credit Mapping) 
                      in terms of courses on offer during the semester. Students and faculty of partner institutes willing for association with 
                      MUJ are always welcome. Manipal University Jaipur has over 66 Memorandum of Understanding (MoU) signed with Universities 
                      and Institutes from USA, UK, France, Australia, Russia, Malaysia, Germany, New Zealand, Portugal, Bulgaria, Czech Republic, 
                      Hungary, Nepal, Poland, Serbia, Singapore, South Africa, Switzerland, Ukraine and Thailand. Out of these 22 MoU have been 
                      signed in 2018-19.  With many more MoU in the pipeline, MUJ is striving to leave its impression across the globe.</p>
          </v-container>
      </v-container>
      </v-flex>


      </v-container>
  </v-content>
</template>

<script>
export default {
  name: "about",
    data() {
    return {
      panel: 0,
      sheet: false,
      explore : [
      {title:'MUJ CENTER FOR INTERNATIONAL PROGRAMS', link:'',
      subs:[{subtitle:'About', link:'/about'},
              {subtitle:'Our Team', link:'/team'},
              /* {subtitle:'Contact', link:''} */
      ]},
      {title:'INTERNATIONAL ACADEMIC PROGRAMS', link:'',
      subs:[{subtitle:'Undergraduate Studies', link:'/undergraduate_studies'},
              {subtitle:'Postgraduate Studies', link:'/postgraduate_studies'},
              {subtitle:'PhD', link:'/phd'},
      ]},
      {title:'INTERNATIONAL ADMISSIONS', link:'',
      subs:[{subtitle:'How to Apply', link:'/apply'},
              {subtitle:'Register Online', link:'/application'},
              {subtitle:'Fee (Foreign/NRI)', link:'https://jaipur.manipal.edu/muj/admission/international-students/fees.html'},
              {subtitle:'Eligibility', link:'https://jaipur.manipal.edu/muj/admission/indian-students/who-can-apply.html'},
              {subtitle:'Course fee refund rules', link:'https://jaipur.manipal.edu/muj/admission/international-students/fees-refund.html'},
      ]},
      {title:'STUDY @ MUJ', link:'',
      subs:[{subtitle:'Academics', link:'https://jaipur.manipal.edu/muj/academics.html'},
              {subtitle:'Life @ MUJ', link:'/life_at_muj'},
              {subtitle:'Explore Rajasthan', link:'/rajasthan'}
      ]},
    ],
      countries: [
        { name: "USA", mou: "11" },
        { name: "UK", mou: "9" },
        { name: "France", mou: "8" },
        { name: "Australia", mou: "8" },
        { name: "Russia", mou: "7" },
        { name: "Malaysia", mou: "3" },
        { name: "Germany", mou: "2" },
        { name: "Singapore", mou: "2" },
        { name: "Bulgaria", mou: "2" },
        { name: "New Zealand", mou: "2" },
        { name: "Nepal", mou: "2" },
        { name: "Portugal", mou: "2" },
        { name: "Hungary", mou: "1" },
        { name: "Malta", mou: "1" },
        { name: "China", mou: "1" },
        { name: "Kazakhstan", mou: "1" },
        { name: "UAE", mou: "1" },
        { name: "Uzbekistan", mou: "1" },
        { name: "Thailand", mou: "1" },
        { name: "Poland", mou: "1" },
        { name: "Serbia", mou: "1" },
        { name: "Ukraine", mou: "1" },
        { name: "South Africa", mou: "1" },
        { name: "Czech Republic", mou: "1" },
        { name: "Multi-country", mou: "2" },
        { name: "Other MoU", mou: "1" },
        { name: "National MoUs", mou: "22" }
      ]
    };
  }
  }
</script>

