<template>
  <v-content>
      <v-parallax height="300" src="/static/buildinglow.jpg">
        
          <h2 class="text-center display-1 pa-2 white--text">
         DIRECTORATE OF INTERNATIONAL COLLABORATIONS
        </h2>
        
      </v-parallax>



    <v-container>
      <v-flex>
        <v-flex xs10 offset-xs1 pt-5 px-5>
          <h2 class="text-center  display-1">Overview</h2>
        </v-flex>
        <v-container pb-5 class="body-2">
          <p>
            Directorate of Internationalization and Collaborations (DoIC) is
            headed by a team of dedicated staff and supported by the advisory
            council with a group of faculty and administrators representing key
            academic units are functional under this office. DoIC:
          </p>
          <ul class="body-2">
            <li>
              is established to promote internationalization and partnerships
              with international institutes
            </li>
            <li>
              is functional for collaboration with institutes globally for
              student and faculty exchange, semester abroad program, student
              mobility, higher education opportunities and signing of MoUs with
              local and global educational and research Institutes.
            </li>
            <li>
              also supports local student chapter of The International
              Association for the Exchange of Students for Technical Experience
              (IAESTE)
            </li>
            <li>
              team also takes care and all International activities, projects,
              funding, mobility (short, long) and Summer and Winter Schools
            </li>
          </ul>
          <br />
          <p>
            In summary, this office provides the comprehensive and unified
            framework within which all work in the International arena can
            seamlessly be achieved.
          </p>
        </v-container>
      </v-flex>
<v-container wrap>
  
        <v-expansion-panels v-model="panel" popout tile flat>
    <v-expansion-panel class=" grey lighten-2"
    >
      <v-expansion-panel-header><h2 class=" display-1 pa-3  pink--text text--darken-3">
         EXPLORE DoIC
        </h2></v-expansion-panel-header>
      <v-expansion-panel-content>
       
             <section row wrap mb-4 class="grey lighten-2 ma-1">
        
        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row wrap align-baseline>
               <v-flex class="  xs12 md6" 
            v-for="item in explore"
            :key="item.title">
                <v-sheet
          class="transparent  pink--text text--darken-4" 
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

      <v-parallax height="300" src="/static/dome2.jpg">
        
          <h2 class="text-center display-1 pa-2 white--text">
         <div
               class="text-center">
               <v-btn
               x-large
               height="60px"
               width="250px"
               tile
              depressed
              class=" white--text mt-5"
              color="#c40018"
              to="/apply"
              >Apply now!</v-btn
            >
              </div>
        </h2>
        
      </v-parallax>
    </v-container>
      <v-container>
        
     <v-card
            outlined
            tile
    class="mx-auto pa-2 mt-5 elevation-0"
    max-width="800"
  >
    <iframe width="100%" height="400px" src="https://www.youtube.com/embed/k6qGp6oUtbI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

  </v-card>
      </v-container>
    </v-container>

    <v-container>
      <section row wrap justify-center mb-4>
        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row wrap align-baseline>
              <v-flex xs12 md6>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-center">
                    <v-icon x-large color="#E71D36" 
                      >mdi-sign-direction</v-icon
                    >
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class=" display-1 text-xs-center">
                      Provide Direction
                    </div>
                  </v-card-title>
                  <v-card-text class="detail body-2">
                    <p>
                      The Office is primarily responsible for providing
                      direction, assistance and synchronizing all of the
                      University’s international work with overseas Institutions
                      and Governments. While providing this leadership role, the
                      office does recognize the importance of individual
                      initiatives, needs and innovativeness of faculty and
                      students across the University. Thus, its primary role is
                      to coordinate the individual activities through a central
                      location, within the context of a well thought out
                      international strategic plan and to facilitate the
                      interrelated and concomitant activities. The key focus is
                      to provide a centralized location for helping the faculty,
                      staff and students the needed assistance for all of their
                      international work. Individual decentralized colleges and
                      schools will still continue to pursue their individual
                      interests although they will be required to coordinate
                      their work through this central location.
                    </p>
                    <p>
                      The office will also help align international
                      opportunities with each college’s curriculum enabling
                      student mobility across institutions, enroll transnational
                      students for both short and long term, facilitate
                      institutional grants and contracts, and pursue value
                      creating projects for the University in general.
                    </p>
                  </v-card-text>
                </v-card>
              </v-flex>

              <v-flex xs12 md6>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-center">
                    <v-icon x-large color="#E71D36"
                      >mdi-book-open-page-variant</v-icon
                    >
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class=" display-1 text-xs-center">
                      Foreign Education
                    </div>
                  </v-card-title>
                  <v-card-text class="detail body-2">
                    <p>
                      It is not uncommon these days for students to traverse the
                      globe to spend a few weeks or a semester engaging
                      themselves in studying, co-opting or interning, conducting
                      research or partaking in other academic pursuits, in
                      countries around the world. These experiences advance and
                      impact positively their attitudes, skill sets and
                      knowledge base, which will be of immense benefit to the
                      students and enable to be competitive and resourceful in
                      the future. Thus, DoIC will be the University's
                      comprehensive resource for study abroad, research abroad,
                      intern abroad, and other educational experiences
                      worldwide. The pivotal goal is to help students and
                      faculty stretch across borders, perhaps farther than they
                      thought possible. By promoting intercultural competence,
                      meticulous erudition and acquisition of foreign languages,
                      DoIC should provide opportunities for academically sound
                      international experiences. It will also administer student
                      exchange programs with partner institutions around the
                      globe, in conjunction with other bodies on campus.
                    </p>
                  </v-card-text>
                </v-card>
              </v-flex>

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
          
                        <iframe  class="hidden-md-and-down" src="https://www.google.com/maps/d/u/0/embed?mid=16-bcEKK0Fkbx3zxJSGHdJdXq4E9yE1Jf" width="500" height="390"></iframe>
                        
                        <iframe  class="hidden-lg-and-up" src="https://www.google.com/maps/d/u/0/embed?mid=16-bcEKK0Fkbx3zxJSGHdJdXq4E9yE1Jf" width="250" height="300"></iframe>
                        
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
                                    <!-- <v-avatar class="mr-4" size="36" tile width="55px"><img
        :src="item.flag"
        alt="flag"
      ></v-avatar> -->
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

              <v-flex xs12 md6>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-center">
                    <v-icon x-large color="#E71D36"
                      >mdi-semantic-web</v-icon
                    >
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class=" display-1">Resource Centre</div>
                  </v-card-title>
                  <v-card-text class="detail body-2">
                    <p>
                      It will serve as the primary liaison and resource center
                      for the University’s vital international linkages, by
                      supporting the development of all memorandum of agreements
                      and partnerships with overseas universities, foreign
                      governments and international organizations abroad. It
                      will help promote the involvement of Manipal’s faculty
                      members, staff and students in international research and
                      development projects, facilitate access to international
                      funding opportunities and in general enrich Manipal
                      Academy of Higher Education’s engagement with global
                      cultures by sharing our physical and intellectual
                      resources with other societies across the world.
                    </p>
                  </v-card-text>
                </v-card>
              </v-flex>

              <v-flex xs12 md6>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-center">
                    <v-icon x-large color="#E71D36"
                      >mdi-face-agent</v-icon
                    >
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class=" display-1">Student Services</div>
                  </v-card-title>
                  <v-card-text class="detail body-2">
                    <p>
                      DoIC will also provide the necessary expertise in the
                      advising of various aspects of settling in on campus and
                      compliance with immigration requirements for all
                      international students, international faculty and staff,
                      and short-term exchange visitors. Similar assistance will
                      be extended to Manipal students aspiring to travel
                      overseas to facilitate a safe and pleasant experience. In
                      addition, in the long run the DoIC should ensure the
                      university compliance with the myriad of evolving
                      regulations in conjunction with the office of quality and
                      compliance, support the University by managing global
                      student and scholar interactions, and facilitate in
                      general, the well-being of all international students,
                      faculty, and staff.
                    </p>
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </section>
    </v-container>
  </v-content>
</template>

<script>
export default {
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
};
</script>

