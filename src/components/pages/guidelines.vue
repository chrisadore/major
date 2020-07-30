<template>
  <v-content >

    <template>
          
     <v-parallax  height="300"
    src="/static/buildinglow.jpg"><h2 class="text-center display-1">GUIDELINES FOR INTERNATIONAL STUDENTS</h2></v-parallax>

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
    
      <v-container >
      <v-flex>
      <v-flex xs10 offset-xs1 pt-5 px-5>
        <H3 class="text-center display-1">Housing and Accommodation</H3>
      </v-flex>
      <v-container  class="pb-5 body-2">
        <p>Hostel accommodation is available for all students. The hostel provides a cot, a mattress, 
            a study table, a chair and a cupboard for each student. Every hostel has uninterrupted electricity, 
            solar heated water facility, water cooler with aqua guard filters, common TV Room, 
            common reading room, etc. Some hostels have indoor games facilities and gymnasium. You will have to bring your own 
            soft furnishings and linen. All have attached bathrooms.</p>
        <p>No student should stay away from his/her room during the night except with prior written permission of the Warden. 
            Students are requested to avoid singing aloud, shouting or making all types of noises that is likely to distract the 
            attention of those who may be studying in their rooms or hostel libraries. Pets of all kinds are prohibited inside the hostel.
             Any damage caused to hostel property will be charged to the occupants of the room/block with a fine. Cooking in hostel rooms is 
             not permitted.</p>
      </v-container>
      </v-flex>

      <v-flex>
      <v-flex xs10 offset-xs1 pt-5 px-5>
        <H3 class="text-center display-1">Security on Campus</H3>
      </v-flex>
      <v-container class="pb-5 body-2">
        <p>Manipal is a secured campus. Complete safety and security is ensured by the Block Supervisors, 
            Warden and Chief Warden (inside the Hostels) and by the Security Staff and Chief Security Officer (in and on the Campus). 
            At Manipal University Jaipur, all students are expected to abide by the rules and regulations of the University 
            and the code of conduct as applicable to Indian Students doing the same course. Any act within the campus that may violate 
            or spoil the academic atmosphere in the University will not be appreciated and the student found guilty of such offence will 
            be dismissed and sent back to their country without any cost to the University.</p>
        <!-- <p>For complaints/suggestions pertaining to security, please contact - <br/>
            Dr Prabhudev Mane<br/>
            Chief Operating Officer - Campus Safety<br/>
            Office: Room no. 107, I floor, University building<br/>
            Manipal<br/>
            Ph: 0820 2922848</p> -->
      </v-container>
      </v-flex>

      <v-flex>
      <v-flex xs10 offset-xs1 pt-5 px-5>
        <H3 class="text-center display-1">Student Affairs</H3>
      </v-flex>
      <v-container class="pb-5 body-2">
        <p>The Department of Student Affairs looks after the welfare of the students. With a lot of students studying in the university,
             it is imperative to have such a support group to look after their interests outside the classroom and provide special services. 
             The department's activities cover wide areas such as guidance, wellness, health and counselling and constantly evolves ways to
              support and foster students' interest in the university.</p>
        <p>General instructions for students on campus: <br/>
            <a href="https://manipal.edu/content/dam/manipal/mu/documents/OIAC/3b.%20Poster%20-%20Anti%20Ragging%20-%20Jul%202015.pdf">Anti Ragging - Jul 2015</a><br/>
            <a href="https://manipal.edu/content/dam/manipal/mu/documents/OIAC/3c.%20Poster%20-%20Health%20Instructions%20-%20Jul%202015.pdf">Health Instructions - Jul 2015</a><br/>
            <a href="https://manipal.edu/content/dam/manipal/mu/documents/OIAC/3d.%20Poster%20-%20Safety%20Instruction%20-%20Jul%202015.pdf">Safety Instruction - Jul 2015</a><br/>
            </p>
      </v-container>
      </v-flex>

      <v-flex>
      <v-flex xs10 offset-xs1 pt-5 px-5>
        <H3 class="text-center display-1">Student Clinics</H3>
      </v-flex>
      <v-container class="pb-5 body-2">
        <p>
          A resident DOCTOR along with an AMBULANCE is available in the hostel premises itself. In case any student requires MEDICAL attention, he/she must immediately inform the Caretaker/Warden.
The student will be given due attention in the form of proper MEDICAL CARE and taken to the HOSPITAL if required. The caretakers will call up and inform the Warden/Chief Warden who will inform the parents/guardians
        </p>
        <p>Contact information: <br/>
            Boys: +91-7727006782
 <br/>
Girls: +91-7727006783</p>
      </v-container>
      </v-flex>

        <v-flex>
      <v-flex xs10 offset-xs1 pt-5 px-5>
        <H3 class="text-center display-1">Library</H3>
      </v-flex>
      <v-container class="pb-5 body-2">
        <p>Manipal University Jaipur’s Central Library is the hub for academic information services in the university and serves as a major learning and resource centre. The Central Library has a spacious area of 2319 Sq.m. that exudes peaceful learning environment. The Library is fully air-conditioned with the seating capacity of 450.

        </p>
        <p>

The central Library employs RFID technology for access control, automatic issue and return of library documents, and stock verification of library holdings.

 </p>
<p>
The Library has a collection of 57800 books with 14500 titles on various subjects and over 3000 reference books. It subscribes about 400 national and international print journals and holds over 450 project reports and 45 Ph.D Thesis.
</p>
 
<p>
The Digital Library has subscribed 20 E-Resources include 17900 e-journals, manuals, reports, standards, and other information from ASCE, ASME, EBSCO Art & Architecture Complete, EBSCO Business Elite, EBSCO Hospitality & Tourism Complete, Emerald Premier e-journals, Taylor and Francis, DELNET-Proquest, DELNET-INFOTRAC, IEEE, SIAM Journals, LexisNexis, Manupatra, Supreme Court Cases, AIR online, EPW India Times,McGrawHill Science & Engineering Access, Science Direct, and World E-Books. The Digital library holds nearly 2500 CDs and DVDs.

 </p>
<p>
The Central Library has established an Institutional Repository using Dspace: A Digital Library Software. The Central Library provides off campus access to all of its subscribed contents to the students, faculty, and research scholars through username and password using knimbus software. The Central Library extends research support to the researchers and faculty by providing Turnitin: A Plagiarism checking software.

 </p>
<p>
The Central Library is a Member of DELNET, INFLIBNET, e-ShodhSindhu, ShodhGanga, British Council Library, Current Science, Indian Academy of Social Sciences, and American Library.</p>
      </v-container>
      </v-flex>

      <v-flex>
      <v-flex xs10 offset-xs1 pt-5 px-5>
        <H3 class="text-center display-1">Food</H3>
      </v-flex>
      <v-container class="pb-5 body-2">
        <p>University Food Courts are located on campus with wide variety of food and beverages made available on campus. 
            Apart from these, students have plenty of options to taste different cuisines at the local hotels.</p>
      </v-container>
      </v-flex>

      <v-flex>
      <v-flex xs10 offset-xs1 pt-5 px-5>
        <H3 class="text-center display-1">Internet</H3>
      </v-flex>
      <v-container class="pb-5 body-2">
        <p>Manipal Campus is equipped with excellent IT infrastructure. 
            The campus is completely wired through Optic Fibre Cable with Wi-Fi at most of the locations including hostels.</p>
      </v-container>
      </v-flex>

      <v-flex>
      <v-flex xs10 offset-xs1 pt-5 px-5>
        <H3 class="text-center display-1">Local Phone Connection</H3>
      </v-flex>
      <v-container class="pb-5 body-2">
        <p>Need a local sim for conversing? Based on your requirement, 
            the service providers will be called at our office to offer you the best possible tariffs.</p>
      </v-container>
      </v-flex>

      <v-flex>
      <v-flex xs10 offset-xs1 pt-5 px-5>
        <H3 class="text-center display-1">Sports Facilities</H3>
      </v-flex>
      <v-container class="pb-5 body-2">
        <p>Physical exercise is not only important for healthy body but it also helps brain stay sharp. And with an aim to grow the all-round personality of the students, Manipal University Jaipur accentuates equally to sports activities as on academics. It provides world-class sports facilities and necessary equipment that help young athletes to hone their sporting skills.
</p><p>

The university Physical Education experts routinely encourage students to attain sporting excellent for maintaining physical fitness and good health.
</p><p>

Here students can unleash their skills in indoor and outdoor sports like Table Tennis, Lane Tennis, Football, Cricket, Badminton, Squash, Throw-ball, Carrom, Chess, Kabaddi and many others. Matches at Intra-University and Inter-University level takes place throughout the academic session. </p>

        <p> Want to become a member? <a href="http://manipal.edu/mu/manipal-life/campus-life/sports-overview/marena.html">click here</a></p>
      </v-container>
      </v-flex>

      <v-flex>
      <v-flex xs10 offset-xs1 pt-5 px-5>
        <H3 class="text-center display-1">Identity Card</H3>
      </v-flex>
      <v-container class="pb-5 body-2">
        <p>Each student is issued an ID card/Combo card. This card will also function as Access Control card. Duplicate/replacement 
            ID card will be issued on payment on additional payment.</p>
      </v-container>
      </v-flex>

      <v-flex>
      <v-flex xs10 offset-xs1 pt-5 px-5>
        <H3 class="text-center display-1">Dress Code</H3>
      </v-flex>
      <v-container class="pb-5 body-2">
        <p>While we respect the dressing norms of different societies and culture, we also expect the students to adhere to 
            a befitting dress code while visiting the University office, attending the college for 
            lectures/practicals/library/labs/examinations and at the University’s formal functions. The dress code is applicable to 
            all students on campus, hence we seek your cooperation in abiding to these regulations.</p>

            <p>Recommended for Boys: <br/>
            <ul>
                <li>Formal/Semi formal wear</li>
                <li>Shoes/Formal footwear</li>
            </ul><br/>
            Recommended for Girls <br/>
            <ul>
                <li>Formal wear like salwar kameez, churidhar</li>
                <li>Any attire with sleeves on and trouser/skirt not above knee length</li>
                <li>Formal foot wears</li>
            </ul>
            </p>
      </v-container>
      </v-flex>

      <v-flex>
      <v-flex xs10 offset-xs1 pt-5 px-5>
        <H3 class="text-center display-1">Visa Requirements</H3>
      </v-flex>
      <v-container class="pb-5 body-2">
        <p>All foreign students seeking admission at Manipal University have to come on a student visa which is valid for more than 180 days. Such students will have to register with the Foreigners' Registration Office (FRO) within 14 days of their arrival in India.
</p>
 <p>

People of Indian origin can either come with a PIO Card or an OCI (Overseas Citizen of India). In such a case, they do not require a student visa to study in India. However, a PIO Card Holder will have to register with the FRO.
            </p>
      </v-container>
      </v-flex>

      </v-container>

  </v-content>
</template>

<script>
  export default {
    name: 'guidelines',
    data () {
      return {
        tab: null,
        text: '',

        tabs: 5,
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
      }
    },
  }
</script>
