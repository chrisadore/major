<template>
  <v-content>
    <template>
      <v-parallax height="300" src="/static/buildinglow.jpg">
        <h1 class="text-center display-1">OUR TEAM</h1></v-parallax
      >
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



<v-container>
  
      <v-flex>
        <v-flex xs10 offset-xs1 pt-5 px-5>
          <h2 class="text-center  display-1">International Collaborations Team</h2>
        </v-flex>
        <v-container pb-5 class="body-2">
          <p>
            Networking with professionals in one’s area of study, areas immediately connected with it as well as distantly related to it is 
            becoming increasingly necessary for his/her growth. One must have an attitude of inquiry, mastery & networking for career growth 
            as well as for personal satisfaction. At Manipal University Jaipur, we take care of all the aspects to provide quality education and 
            training to produce world class professionals.
          </p>
          <p>
            International & National Collaborations at MUJ are therefore dedicated to academic synergisation and research association with 
            Frontline Universities/Institutions. MUJ endeavors to provide opportunities to its students and faculty to stretch their wings 
            towards global networking.
          </p>
        </v-container>
        
        <v-flex xs10 offset-xs1 pt-5 px-5>
          <h2 class="text-center  display-1">Leadrship Directorate of Collaborations</h2>
        </v-flex>
        
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
      </v-flex>
<v-card
    class="elevation-0 ma-5 pa-5" outlined>
  <v-container>
      <section row wrap justify-center mb-4>
        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row wrap align-baseline>
              <v-flex xs12 md4
              
          v-for="(item, i) in ourteam"
          :key="i">
                
 <v-card
    class="mx-auto"
    max-width="344"
    min-height="200"
    outlined
    
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4"> {{item.post}}</div>
        <v-list-item-title class="subtitle mb-1"> {{item.name}}</v-list-item-title>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      >
      <img
      alt="item.name"
      :src="item.src"></v-list-item-avatar>
    </v-list-item>

     <v-card-actions>
      <v-btn
        color="#212121"
        text
        small
         href="tel:item.cell">
                   <v-icon  color="pink" small>mdi-cellphone-iphone</v-icon>
                  : {{item.cell}}
      </v-btn>

      <v-btn
        color="#212121"
        text
        small
         href="tel:item.office"
      > <v-icon color="pink" small>mdi-phone</v-icon> 
      : {{item.office}}
      </v-btn>
    </v-card-actions>
  </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </section>
    </v-container>

</v-card>
</v-container>
    </template>
  </v-content>
</template>


<style>
  a{
    text-decoration: none !important;
    color: #212121 !important;
  }
</style>  
<script>
export default {
  name: "team",
    data: () => ({
       ourteam:[
        {
          name:'Mr. Ajay Kumar Sharma', post:'Director',
        cell:'+918955377392', office:'0141-3999100', src:'/static/1.jpg'
        },
        {
          name:'Dr. Santosh Patil', post:'Deputy Director', post2:'Associate Professor',
          line1:'Department of Mechanical Engineering, School of Automobile,  Mechanical and Mechatronics (SAMM)',
        cell:'+919001511483', office:'0141-3999100', src:'/static/2.jpg'
        },
        {
          name:'Dr. Praveen Kumar Surolia', post:'Assistant Director', post2:'Associate Professor',
          line1:'Department of Chemistry, School of Basic Sciences',
        cell:'+919166861737', office:'0141-3999100', src:'/static/3.jpg'
        },
      ], 
      items: [
        {
          color: '#1F7087',
          src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
          title: 'Supermodel',
          artist: 'Foster the People',
        },
        {
          color: '#952175',
          src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
          title: 'Halcyon Days',
          artist: 'Ellie Goulding',
        },
      ],
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
    }),
  }
</script>

