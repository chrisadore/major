<template>
  <v-content>
    <template>
      <v-parallax height="300" src="/static/buildinglow.jpg">
        <h2 class="text-center  display-1">
          VISITS TO PROMOTE DoIC
        </h2></v-parallax>
    </template>

    <template>
      <v-card flat tile>
        <v-toolbar color="#c40018" dark flat>
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
<v-container wrap>
  
        <v-expansion-panels tile flat>
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
            <v-card flat>
              <v-card-text>
                <v-flex>


                  <v-content v-for="item in unis"
            :key="item.name">
                    <section row wrap text-center>
                      <v-flex xs12>
                        <v-container grid-list-xl>
                          <v-flex primary-title class="layout justify-center">
                            <div class="headline text-center">
                             
                              <v-card class="elevation-0 transparent justify-center">
                                <v-img width="200px"
                                  :src="item.logo"
                                ></v-img> 
                              </v-card>
                            </div>
                            
                          </v-flex>
                          <v-flex primary-title class="layout justify-center">
                            <div class="headline text-center pb-5">
                              <h3>{{item.name}}</h3>
                            </div>
                            
                          </v-flex>
                          
                          <v-layout row wrap>
                            
                            <v-flex>
                              <v-card class=" text-center ma-3">
                                <v-card-text class="detail"
                                v-for="items in item.points"
            :key="items.cont">
                                    <v-icon>mdi-arrow-right</v-icon>{{items.cont}}
                                    
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
<v-container wrap>
  
        <v-expansion-panels tile flat>
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
            <v-card flat>
              <v-card-text>
                <v-flex>
                  <v-content>
                    <section row wrap text-center mb-4>


                      <v-flex xs12  v-for="item in visits"
            :key="item.name">
                        <v-container grid-list-xl>
                          <v-flex primary-title class="layout justify-center">
                            <div class="headline text-center pb-5">
                              <v-icon
                                x-large
                                class="blue--text text--lighten-2 pa-2"
                                >mdi-school</v-icon
                              ><br />
                              {{item.name}}
                            </div>
                          </v-flex>
                          <v-layout row wrap>
                            <v-flex xs12 md6>
                              <v-card class="elevation-0 transparent">
                                <v-img lazy-src :src="item.photo"></v-img>
                              </v-card>
                            </v-flex>
                            <v-flex xs12 md6>
                              <v-card class="elevation-0 transparent">
                                <v-card-text class="detail"
                                v-for="items in item.points"
            :key="items.cont">
                                    <v-icon>mdi-arrow-right</v-icon>{{items.cont}}
                                  
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
  <v-card
  tile
  outlined
    max-width="800"
    class="mx-auto pa-5 elevation-0"
  >
  <v-card-title class="justify-center mb-5">
    PHOTO GALLERY
  </v-card-title>
      <v-carousel 
      height="400"
    cycle hide-delimiters>
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
          lazy-src
          
          ><v-flex class="text-center">{{ item.txt }}</v-flex>
        </v-carousel-item>
      </v-carousel>
  </v-card>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: "visits",
  data() {
    return {
      tabs: null,
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
      visits:[
        {
          name:'Australian Student Delegation', photo:'/static/photos/1.jpg',
          points:[{cont:'26 students from 11 different Australian Universities visited MUJ during December 2018'},
                  {cont:'8 female students from Australian universities visited MUJ during February 2019'},
          ]
          },
          {
          name:'Lancaster University Visit-Explore India Program', photo:'/static/photos/2.jpg',
          points:[{cont:'26 students from Lancaster University visited MUJ under Explore India Program during 2nd to 8th September 2018'},
                  {cont:'MAHE extended this program to MUJ campus and it was well organised.'},
          ]
          },
          {
          name:'Australian Education Expo', photo:'/static/photos/3.jpg',
          points:[{cont:'28 Australian Universities were at Manipal University Jaipur and provided students with in-depth knowledge and guidance of admissions and scholarships'},
                  {cont:'Collaboration opportunities were explored with the participant Universities.'},
          ]
          },
      ],
      unis: [
        {
          name: 'ITMO University(Information Technologies, Mechanics and Optics)', logo:'/static/photos/logos/ITMO.jpg',
          points:[
            {cont:'Type: State University'},
            {cont:'Location: St Petersburg'},
            {cont:'Established: 1900'},
            {cont:'Rankings: Top 5 Russian (THE), Top 20 Eurasia (THE), Among Shanghai Ranking, QS subject ranked'},
            {cont:'One of 15 universities in Russia in 5-100 excellence program of Govt. of Russia'},
            {cont:'3+1+1 program, 1+1 program'},
            {cont:'ACM training program, Organise Joint summer camps, ITMO Technopark and AIC work together'},
          ],
        },
        {
          name: 'Moscow State University of Railway Engineering (MIIT)', logo:'/static/photos/logos/miit.jpg',
          points:[
            {cont:'Type: State University'},
            {cont:'Location: Moscow'},
            {cont:'Established: 1896'},
            {cont:'Rankings: BRICS 301-350'},
            {cont:'Rector: Minister in DUMA'},
          ],
        },
        {
          name: 'The Russian Presidential Academy of National Economy and Public Administration (RANEPA)', logo:'/static/photos/logos/ranepa.jpg',
          points:[
            {cont:'Type: State University'},
            {cont:'Location: Moscow'},
            {cont:'Established: 2010'},
            {cont:'Rankings: BRICS 90'},
          ],
        },
        {
          name: 'Small Business Association of Australia (SBAA)', logo:'/static/photos/logos/SBAA.jpg',
          points:[
            {cont:'Delegation visited during Nov. 2018 Final year projects, Paid Internships and other matters were discussed during the visit'},
            {cont:'MoU signed on 28.03.2019'},
          ],
        },
        {
          name: 'Gubkin Russian State University of Oil and Gas', logo:'/static/photos/logos/gubkin.jpg',
          points:[
            {cont:'Collaboration with Atal Incubation Centre has been worked out'},
            {cont:'MOU signed on 22.02.2019'},
          ],
        },
        {
          name: 'Ecole Centrale De Nantes, France (ECN)', logo:'/static/photos/logos/ecn.jpg',
          points:[
            {cont:'2 Students have applied for Internship'},
            {cont:'MOU signed on 06.04.2018'},
          ],
        },
        {
          name: 'Association of Chartered Certified Accountants (ACCA) and International Skills Development Corporation (ISDC)', logo:'/static/photos/logos/accaisdc.jpg',
          points:[
            {cont:'The ISDC, UK is the learning partner with MUJ to facilitate the training and learning for B.Com. Hons Accounting by providing all the relevant learning material for ACCA and helping with Train the trainer programme.'},
            {cont:'B.Com Hons in Accounting Program is integrated with ACCA, UK'},
          ],
        },
        {
          name: 'ESTACA – Ecole Superieure des Techniques Aeronautiques et de Construction Automobile, Montigny – le- Bretonneux, France', logo:'/static/photos/logos/estaca.jpg',
          points:[
            {cont:'Faculty invited to participate in their International Week and teach. 4 Students have gone for exchange Programme'},
            {cont:'1 student from ESTACA Received so far and one more will be joining in ensuing semester'},
          ],
        },
        {
          name: 'University of Applied Sciences, Western Switzerland', logo:'/static/photos/logos/hesso.jpg',
          points:[
            {cont:'Summer University Programme for academic and research association'},
            {cont:'17 students have visited Singapore and 9 students have visited MUJ from Singapore'},
            {cont:'Proposal for this years Summer Programme at Switzerland has been approved'},
          ],
        },
        {
          name: 'Monash University, Melbourne', logo:'/static/photos/logos/monash.jpg',
          points:[
            {cont:'Public Research University, 100 Research Centers, Part of G8, THE( TOP 100)in TOP 1 % of the World'},
            {cont:'Founded in 1958'},
            {cont:'Initiated Discussion for Semester Abroad Programme'},
          ],
        },
        {
          name: 'University Of Wollongong & Sydney Business School', logo:'/static/photos/logos/wolf.jpg',
          points:[
            {cont:'Ranking(QS World subject ranking): In top 200 University'},
            {cont:'Location: UOW Main campus, Wollongong(Sydney)'},
            {cont:'Proposal for Articulation agreement for Integrated Programme 3+1+1 received'},
          ],
        },
        {
          name: 'Regency International Centre', logo:'/static/photos/logos/tafesa.jpg',
          points:[
            {cont:'Visit of joint campus of ICHM, Le Cordon Bleu and TAFE Hospitality School'},
            {cont:'Outcome: (MOU with ICHM)'},
            {cont:'Summer School with Tafe, Hospitality'},
          ],
        },
        {
          name: 'Flinders University', logo:'/static/photos/logos/flinders.jpg',
          points:[
            {cont:'Public University Founded in 1966'},
            {cont:'Ranked Within World TOP 500, TOP 10 In Australia, THE (251-300)'},
            {cont:'MOU Existing, Discussed Special Scholarship for MUJ students and Exchange Programme'},
            {cont:'Indo Australian Workshop has been organized'},
            {cont:'1 Faculty from each side has visited as part of collaboration'},
          ],
        },
      ],
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
        {
                src: '/static/photos/visit/7.jpg',
            },
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
        },
        {
          src: "/static/photos/visit/14.jpg"
        },
        {
          src: "/static/photos/visit/15.jpg"
        },
        {
          src: "/static/photos/visit/16.jpg"
        },
        {
          src: "/static/photos/visit/17.jpg"
        },
        {
          src: "/static/photos/visit/18.jpg"
        },
        {
          src: "/static/photos/visit/19.jpg"
        },
        {
          src: "/static/photos/visit/20.jpg"
        },
        {
          src: "/static/photos/visit/21.jpg"
        },
        {
          src: "/static/photos/visit/22.jpg"
        },
        {
          src: "/static/photos/visit/23.jpg"
        },
        {
          src: "/static/photos/visit/24.jpg"
        },
        {
          src: "/static/photos/visit/25.jpg"
        },
        {
          src: "/static/photos/visit/26.jpg"
        },
        {
          src: "/static/photos/visit/27.jpg"
        },
        {
          src: "/static/photos/visit/28.jpg"
        },
        {
          src: "/static/photos/visit/29.jpg"
        }
      ]
    };
  }
};
</script>
