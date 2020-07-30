<template>
  <v-content>
      <v-parallax height="300" src="/static/buildinglow.jpg">
        <h1 class="text-center display-1">UNDERGRADUATE STUDIES</h1></v-parallax>

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
           
          <v-expansion-panels focusable>
      <v-expansion-panel v-for="item in options"
            :key="item.title">
        <v-expansion-panel-header>
         <p>
            <v-icon class="mr-3" color="primary">{{item.icon}}</v-icon> {{item.title}}   </p> 
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-list
          class="transparent">
        <v-list-item two-line 
          v-for="items in item.programs"
            :key="items.name"
            router
            :href="items.link"
                    rel="noopener noreferrer"
                    target="_blank"
          link
        >

          <v-list-item-content>
               	►   {{ items.name }}
          </v-list-item-content>
        </v-list-item>
      </v-list>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
     <v-card
            outlined
    class="mx-auto pa-2 mt-5 elevation-0"
    max-width="800"
  >
    <iframe width="100%" height="400px" src="https://www.youtube.com/embed/HukpI8gYN70" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

  </v-card>
        </v-container>

  </v-content>
</template>

<script>
export default {
  name: "undergraduate_studies",
    data: () => ({
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
        options:[
            {title:'Architecture and Design', icon:'mdi-ruler-square',
                programs:[
                    {name:'Bachelor of Architecture (BArch)', link:'https://jaipur.manipal.edu/content/muj/academics/institution-list/fod/programs/program-list/barch.html'}
                ]},
            {title:'Arts and Humanities', icon:'mdi-chart-scatter-plot-hexbin',
                programs:[
                    {name:'Bachelor of Arts (Hons) in English', link:'https://jaipur.manipal.edu/content/muj/academics/institution-list/foa/programs/program-list/BA-English.html'},
                    {name:'Bachelor of Physical Education and Sports (BPES)', link:'https://jaipur.manipal.edu/content/muj/academics/institution-list/foa/programs/program-list/BA-physical-education.html'},
                    {name:'Bachelor of Arts (Hons) in Psychology', link:'https://jaipur.manipal.edu/content/muj/academics/institution-list/foa/programs/program-list/BA-Psychology.html'},
                    {name:'Bachelor of Law - LL.B', link:'https://jaipur.manipal.edu/content/muj/academics/institution-list/foa/programs/program-list/bachelor-of-law-llb-course-admissions.html'},
                    {name:'Integrated BBA, LL.B (Hons)', link:'https://jaipur.manipal.edu/content/muj/academics/institution-list/foa/programs/program-list/integrated-bba-llb-muj.html'},
                    {name:'BA in Journalism & Mass Communication – BA J&MC', link:'https://jaipur.manipal.edu/content/muj/academics/institution-list/foa/programs/program-list/bjmc.html'},
                    {name:'Bachelor of Arts (Hons) in Economics', link:'https://jaipur.manipal.edu/content/muj/academics/institution-list/foa/programs/program-list/BA-Economics.html'},
                    {name:'Bachelor of Arts -Liberal Arts', link:'https://jaipur.manipal.edu/content/muj/academics/institution-list/foa/programs/program-list/BA-Liberal-Arts.html'},
                ]},
            {title:'Basic Sciences', icon:'mdi-atom',
                programs:[
                    {name:'Bachelor of Science (Hons)- Microbiology', link:'https://jaipur.manipal.edu/content/muj/academics/institution-list/fos/programs/program-list/BSc-Microbiology-Hons.html'},
                    {name:'Bachelor of Science (Hons) - Biotechnology', link:'https://jaipur.manipal.edu/content/muj/academics/institution-list/fos/programs/program-list/BSc-Biotechnology-Hons.html'},
                    {name:'Bachelor of Science (Hons) - Chemistry', link:'https://jaipur.manipal.edu/content/muj/academics/institution-list/fos/programs/program-list/BSc-Hons-Chemistry.html'},
                    {name:'Bachelor of Science (Hons) - Mathematics', link:'https://jaipur.manipal.edu/content/muj/academics/institution-list/fos/programs/program-list/BSc-Hons-Mathematics.html'},
                    {name:'Bachelor of Science (Hons) - Physics', link:'https://jaipur.manipal.edu/content/muj/academics/institution-list/fos/programs/program-list/BSc-Biotechnology-Hons1.html'},
                ]},
            {title:'Business and Commerce', icon:'mdi-cash-multiple',
                programs:[
                    {name:'Bachelor of Business Administration (BBA)', link:'https://jaipur.manipal.edu/content/muj/academics/institution-list/fom/programs/program-list/bba.html'},
                    {name:'Bachelor of Commerce (B. Com)', link:'https://jaipur.manipal.edu/content/muj/academics/institution-list/fom/programs/program-list/bcom.html'},
                    {name:'Bachelor of Commerce (Hons) - Accounting', link:'https://jaipur.manipal.edu/content/muj/academics/institution-list/fom/programs/program-list/bcom-hons.html'},
                    ]},
            {title:'Computer Applications', icon:'mdi-math-compass',
                programs:[
                    {name:'Bachelor of Computer Applications', link:'https://jaipur.manipal.edu/content/muj/academics/institution-list/fos/programs/program-list/bca.html'},
                    ]},
            {title:'Engineering', icon:'mdi-screw-machine-flat-top',
                programs:[
                    {name:'B Tech Civil Engineering', link:'https://jaipur.manipal.edu/content/muj/academics/institution-list/foe/programs/program-list/civil-engineering.html'},
                    {name:'B Tech Computer and Communication Engineering', link:'https://jaipur.manipal.edu/content/muj/academics/institution-list/foe/programs/program-list/computer-communication.html'},
                    {name:'B Tech Electronics & Communication Engineering', link:'https://jaipur.manipal.edu/content/muj/academics/institution-list/foe/programs/program-list/electronics-communication-engineering.html'},
                    {name:'B Tech Information Technology', link:'https://jaipur.manipal.edu/content/muj/academics/institution-list/foe/programs/program-list/information-technology.html'},
                    {name:'B Tech Mechatronics Engineering', link:'https://jaipur.manipal.edu/content/muj/academics/institution-list/foe/programs/program-list/mechatronics-engineering.html'},
                    {name:'B Tech Lateral Entry', link:'https://jaipur.manipal.edu/content/muj/academics/institution-list/foe/programs/program-list/B-Tech-Lateral.html'},
                    {name:'B Tech Automobile Engineering', link:'https://jaipur.manipal.edu/content/muj/academics/institution-list/foe/programs/program-list/automobile-engineering.html'},
                    {name:'B Tech Mechanical Engineering', link:'https://jaipur.manipal.edu/content/muj/academics/institution-list/foe/programs/program-list/mechanical-engineering.html'},
                    {name:'B Tech Electrical & Electronics Engineering', link:'https://jaipur.manipal.edu/content/muj/academics/institution-list/foe/programs/program-list/b-tech-electrical-electronics-engineering-eee-admissions.html'},
                    {name:'B Tech Data Science & Engineering', link:'https://jaipur.manipal.edu/content/muj/academics/institution-list/foe/programs/program-list/B-Tech-Datascience-Engineering.html'},
                    {name:'B Tech Computer Science & Engineering', link:'https://jaipur.manipal.edu/content/muj/academics/institution-list/foe/programs/program-list/b-tech-computer-science-engineering-admissions.html'},
                    {name:'B Tech Chemical Engineering', link:'https://jaipur.manipal.edu/content/muj/academics/institution-list/foe/programs/program-list/chemical-engineering.html'},
                    ]},
            {title:'Hotel Management', icon:'mdi-pasta',
                programs:[
                    {name:'Bachelor of Hotel Management (BHM)', link:'https://jaipur.manipal.edu/content/muj/academics/institution-list/fom/programs/program-list/b-hotel-management.html'},
                    {name:'Bachelor of Business Administration in Hospitality & Tourism Operations', link:'https://jaipur.manipal.edu/content/muj/academics/institution-list/fom/programs/program-list/b-hotel-management1.html'},
                    ]},
            {title:'Journalism and Communication', icon:'mdi-newspaper-variant-outline',
                programs:[
                    {name:'BA in Journalism & Mass Communication – BA J&MC', link:'https://jaipur.manipal.edu/content/muj/academics/institution-list/foa/programs/program-list/bjmc.html'},
                    ]},
            {title:'Law', icon:'mdi-gavel',
                programs:[
                    {name:'Bachelor of Law - LL.B', link:'https://jaipur.manipal.edu/content/muj/academics/institution-list/foa/programs/program-list/bachelor-of-law-llb-course-admissions.html'},
                    {name:'Integrated BBA, LL.B (Hons)', link:'https://jaipur.manipal.edu/content/muj/academics/institution-list/foa/programs/program-list/integrated-bba-llb-muj.html'},
                    {name:'Integrated BA, LL.B (Hons)', link:'https://jaipur.manipal.edu/content/muj/academics/institution-list/foa/programs/program-list/ba-llb-muj.html'},
                    ]},
            {title:'Management', icon:'mdi-graph',
                programs:[
                    {name:'Bachelor of Business Administration (BBA)', link:'https://jaipur.manipal.edu/content/muj/academics/institution-list/fom/programs/program-list/bba.html'},
                    {name:'Bachelor of Commerce (B. Com)', link:'https://jaipur.manipal.edu/content/muj/academics/institution-list/fom/programs/program-list/bcom.html'},
                    {name:'Bachelor of Hotel Management (BHM)', link:'https://jaipur.manipal.edu/content/muj/academics/institution-list/fom/programs/program-list/b-hotel-management.html'},
                    {name:'Bachelor of Business Administration in Hospitality & Tourism Operations', link:'https://jaipur.manipal.edu/content/muj/academics/institution-list/fom/programs/program-list/b-hotel-management1.html'},
                    ]},
            {title:'Planning and Design', icon:'mdi-pencil-ruler',
                programs:[
                    {name:'Bachelor of Architecture (BArch)', link:'https://jaipur.manipal.edu/content/muj/academics/institution-list/fod/programs/program-list/barch.html'},
                    {name:'Bachelor of Design (Interior Design)', link:'https://jaipur.manipal.edu/content/muj/academics/institution-list/fod/programs/program-list/B-des-in-interior-designing-course-admissions.html'},
                    {name:'Bachelor of Design (Fashion Design)', link:'https://jaipur.manipal.edu/content/muj/academics/institution-list/fod/programs/program-list/bdes-bachelor-of-fashion-designing-course-admissions.html'},
                    {name:'Bachelor of Fine Arts (Applied Arts)', link:'https://jaipur.manipal.edu/content/muj/academics/institution-list/fod/programs/program-list/bfa.html'},
                    ]},
        ]
    }),
  }
</script>

