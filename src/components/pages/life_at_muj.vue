<template>
  <v-content>
    <template>
      <v-parallax height="300" src="/static/buildinglow.jpg">
        <h1 class="text-center display-1">LIFE @ MUJ</h1></v-parallax
      >
    </template>
    
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

      <v-container class="body-2">


        
      <v-flex>
        <v-flex xs10 offset-xs1 pt-5 px-5>
        <h3 class="text-center display-1">Overview</h3>
      </v-flex>

      <v-container  class="pb-5 body-2">
        <p>Manipal University Jaipur (MUJ) provides a unique environment for the holistic growth of students, under the able guidance of experienced and committed teachers.  Students acquire creative, innovative, entrepreneurial and the technological skills, which are required to make them profession and industry ready.  The curriculum is broad-based, and students are allowed to register for many programme electives, as also open electives from diverse streams.  Experts from industry are also invited frequently to address the students and give them the important industry perspective in a course.</p>
        <p>Education at MUJ is not just about books and classrooms, but also about overall personality development and honing special skills.  A student can achieve and accomplish multiple goals because of the variety of facilities offered.  Apart from gaining a degree that is recognized all over the world, a student graduates with an edge over the others, which is necessary in today’s competitive world.</p>
        <p>MUJ students have their hands full, 24x7, with various curricular, co-curricular and extra-curricular activities happening all around the year. The campus is fully Wi-Fi enabled and boasts of a large, 300+ PC Central Computing Facility. The academic process is completely automated, with an Digital Management System in place, which allows students and their parents to access their grades and attendance etc. from the confines of their homes.  It also renders the evaluation and examination system open and transparent.</p>
        <p>The faculty at MUJ is highly qualified and is assisted and supplemented by eminent and experienced Adjunct faculty from academia and industry. An Academic Advisory Board, consisting of renowned academicians and industrialists, both from the state and Centre, is in place, to provide the necessary expertise on all academic matters and to plan for future academic activities.</p>
        
          <v-parallax class="ma-5 pa-5" height="300" src="/static/ilm.jpg">
        
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
              >Visit MUJ Website!</v-btn
            >
              </div>
        </h2>
        
      </v-parallax>
        <p>The spacious and state-of-the-art Central Library at MUJ is adequately stocked, with the requisite number of reference and text-books, a large number of national and international journals of repute, e-books, and e-journals. Students and faculty are given online access to many e-books/courses, from Pearson, NPTEL and Springer etc. MUJ library is one of the most modern library in the state equipped with RFID system, KOHA LMS, visibility on Shodh Ganga and membership of INFLIBNET etc.</p>
        <p>Many indoor and outdoor facilities are available to students for sports, cultural and technical activities, outside the classroom, through various Student Clubs. The sports facilities include table tennis, carrom, football, lawn tennis, badminton, squash, cricket, throw ball, kabaddi, etc.  Intra- and inter-University matches take place regularly, throughout the year. MUJ now boasts of a motor racing track, on which many professional and amateur motorists, including our students, are honing their racing skills.  The Music, Literature and Dramatics Clubs facilitate students to show their prowess in the cultural arena, under the able guidance of expert faculty.  Technical Clubs like the Green Club, Robotics Club, IEEE Students’ chapter, IE(I) and ICEIT chapters etc. allow the students to learn and update themselves with the latest technologies and showcase their abilities in various fields, outside their scope of study.</p>
        <p>MUJ boasts of world-class infrastructure, with Hostels designed by world-renowned architect,    Ar. Hafeez Contractor and offering the very best facilities to students, including Wi-Fi, launderette, gymnasium and sauna, tuck shop and multi-cuisine outlets. The Food Court is a unique concept at MUJ, where students can have their meals and other eatables of their choice. The Menu is finalized by the students through representation in the Mess committee.  The Student Activity Area (SAC), the Central Vista and the Amphitheatre are places where students gather during their off-class hours and think, imagine, connect, reflect, network and innovate.</p>
        <p>The Administrative building is wonderfully attractive having magnificent dome catching visitor’s eye from a distance and currently houses the Central Library, the Faculty of Design, the Faculty of Management & Commerce, the Training & Placement facility and the administrative offices of Admissions, IT infra, HR, Purchase and Finance.</p>
        <p>The newly built second Academic Block houses a State-of-the-art Auditorium (known as TMA Pai Auditorium), complete with video, audio, and display facilities; it also has many spacious classrooms, the Moot Courtroom, Discussion and Boardrooms, Computing and other laboratories and many faculty rooms and workstations.  Two more Auditoriums (Sharda Pai auditorium and Ram Das Pai amphitheater have been built in this block for holding major events. </p>
      </v-container>
      </v-flex>

      </v-container>
      <v-container>
            <v-card
    class="pa-12"
    img="/static/building.jpg"
    tile
    flat
  >
    <v-card
        width="350px"
    >
      <v-navigation-drawer
        floating
        permanent
        width="350px"
      >
              <v-flex>
          <v-container grid-list-xl>
            <v-layout row wrap align-baseline>
               <v-flex 
            v-for="item in explore1"
            :key="item.title">
                <v-sheet
          class="transparent pink--text text--darken-3"
          
          outlined
          tile
        >
          
         <h2><v-icon class="pl-3 pr-2" color="pink darken-3">mdi-arrow-right-bold</v-icon > {{item.title}}</h2>

          <v-list
          class="transparent">
        <v-list-item
          v-for="items in item.subs"
            :key="items.title"
            router
            :href="items.link"
                rel="noopener noreferrer"
                target="_blank"
          link
        >

          <v-list-item-content>
            <v-list-item-title> <v-icon class="pr-3" color="pink darken-4">mdi-{{items.icon}}</v-icon>
              {{ items.subtitle }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

        </v-sheet>
              </v-flex>     

            </v-layout>
          </v-container>
        </v-flex>
      </v-navigation-drawer>
    </v-card>
  </v-card>
      </v-container>
  </v-content>
</template>

<script>
export default {
  name: "events",
    data: () => ({explore1 : [
      {title:'Life @ MUJ',
      subs:[{ subtitle: 'Hostels @ MUJ', icon: 'domain', link:'https://jaipur.manipal.edu/muj/life-at-muj/hostel-facility.html' },
          { subtitle: 'Campus Facilities', icon: 'home-plus', link:'https://jaipur.manipal.edu/muj/life-at-muj/campus-facilities.html' },
          { subtitle: 'Central Library', icon: 'library', link:'https://jaipur.manipal.edu/muj/life-at-muj/central-library.html' },
          { subtitle: 'Student’ Welfare', icon: 'hospital-box-outline', link:'https://jaipur.manipal.edu/muj/life-at-muj/directorate-of-student-welfare.html' },
          { subtitle: 'E-CELL', icon: 'handshake', link:'https://jaipur.manipal.edu/muj/life-at-muj/entrepreneurship-cell-manipal-university-jaipur.html' },
          { subtitle: 'Guest House', icon: 'home-floor-g', link:'https://jaipur.manipal.edu/muj/life-at-muj/muj-guest-house.html' },
          { subtitle: 'Student Clubs', icon: 'account-group', link:'https://jaipur.manipal.edu/muj/life-at-muj/student-clubs-at-muj.html' },
          { subtitle: 'Campus Tour', icon: 'teach', link:'https://jaipur.manipal.edu/muj/life-at-muj/campus-tour.html' },
          { subtitle: 'Anti-Ragging', icon: 'cancel', link:'https://jaipur.manipal.edu/muj/life-at-muj/anti-ragging.html' },
          { subtitle: 'Grievance Rgistration', icon: 'form-select', link:'https://jaipur.manipal.edu/muj/life-at-muj/Online-Grievance-Redressal-Registration.html' },
        
      ]},],
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

