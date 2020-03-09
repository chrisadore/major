<template>
  <v-content>
    <template>
      <v-parallax height="300" src="/static/building1.jpg"
        ><h2 class="text-center display-1">PARTNER UNIVERSITIES</h2></v-parallax
      >
    </template>
    <v-container>
      <v-flex>
        <v-container pb-5 class="cont body-2">
          <p>
            With international tie ups we facilitate networking of our students
            and faculty as well as impart training to them to:
          </p>
          <ul>
            <li>
              Enjoy living and working in various countries with different
              cultural environment
            </li>
            <li>
              Gain practical experience in real international work environment,
              industries, research institutes, consulting firms and laboratories
            </li>
            <li>Obtain cutting edge technical knowledge and experience</li>
            <li>
              Develop professional contacts and stand out to potential employers
              by enhancing their CVs
            </li>
            <li>Improve social and cultural skills.</li>
          </ul>
          <br />
          <p>
            MUJ has established international programs and MoUs with the
            following Institutes/Universities abroad:
          </p>
        </v-container>
      </v-flex>

      <v-container
        ><v-flex xs12 md6 mx-auto>
          <v-card class="elevation-3 transparent">
            <v-container>
              <v-flex><v-img src="/static/map.png"></v-img></v-flex>
            </v-container>
          </v-card>
        </v-flex>
      </v-container>

      <v-container class=" body-2">
        <v-expansion-panels
          popout
          focusable
          v-for="univs in universities"
          :key="univs.country"
        >
          <v-expansion-panel class="ma-1">
            <v-expansion-panel-header>
              <v-row no-gutters>
                <v-row class="mb-4" align="center">
                  <v-avatar
                    color="grey"
                    class="mr-4"
                    size="36"
                    tile
                    width="55px"
                    ><img :src="univs.flag" alt="flag"
                  /></v-avatar>

                  <span class=" cname grey--text text--darken-3">{{
                    univs.country
                  }}</span>
                  <v-spacer></v-spacer>
                </v-row>
              </v-row>
            </v-expansion-panel-header>
            <v-expansion-panel-content class="pa-2">
              <a
                v-for="item in univs.unis"
                :key="item.name"
                :href="item.link"
                rel="noopener noreferrer"
                target="_blank"
              >
                <v-sheet :elevation="2" class="pa-5 text-left">
                  <p class=" px-5 grey--text text--darken-3 uname">
                    <v-tooltip color="black" top>
                      <template v-slot:activator="{ on }">
                        <v-btn icon v-on="on">
                          <v-icon color="orange">mdi-bookshelf</v-icon>
                        </v-btn>
                      </template>
                      <span>Visit Website</span>
                    </v-tooltip>
                    <span>{{ item.name }}</span>
                  </p>
                  <p class=" px-5 grey--text text--darken-2">
                    <v-tooltip color="black" bottom>
                      <template v-slot:activator="{ on }">
                        <v-btn icon v-on="on">
                          <v-icon color="orange">mdi-account-box</v-icon>
                        </v-btn>
                      </template>
                      <span>Nodal Officer</span>
                    </v-tooltip>
                    <span>{{ item.nofficer }}</span>
                  </p>
                </v-sheet>
                <br
              /></a>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-container>
    </v-container>
  </v-content>
</template>

<style scoped>
.cname {
  font-size: 20px;
}
.uname {
  font-size: 15px;
}
</style>
<script>
export default {
  name: "partner_univerities",

  data() {
    return {
      universities: [
        {
          country: "AUSTRALIA",
          flag: "/static/flags/flagAustralia.jpg",
          unis: [
            {
              name:
                "Commonwealth Scientific and Industrial Research Organisation",
              nofficer: "Dr Monika Sogani",
              link: "https://www.csiro.au/"
            },
            {
              name: "Deakin University Victoria",
              nofficer: "Mr Ankit Mundra",
              link: "https://www.deakin.edu.au/"
            },
            {
              name: "Flinders University",
              nofficer: "Dr. Pushpendra Kumar",
              link: "https://www.flinders.edu.au/"
            },
            {
              name: "ICE WaRM Adelaide",
              nofficer: "Dr Monika Sogani",
              link: "https://www.icewarm.com.au/"
            },
            {
              name: "International  College of Hotel Management",
              nofficer: "Dr Amit Dutta",
              link: "https://www.ichm.edu.au/"
            },
            {
              name: "Small Business Association of Australia (SBAA)",
              nofficer: "",
              link: "https://smallbusinessassociation.com.au/"
            },
            {
              name: "The University of Newcastle",
              nofficer: "Dr. Narendra Singh Bhati",
              link: "https://www.newcastle.edu.au/"
            },
            {
              name: "T&R Consulting  Pvt Ltd.",
              nofficer: "Dr Archana Poonia ",
              link: "https://tnrint.com/"
            }
          ]
        },

        {
          country: "BULGARIA",
          flag: "/static/flags/flagBulgaria.jpg",
          unis: [
            {
              name: "Technical  University of Varna",
              nofficer: "Dr Amita Nandal",
              link: "http://fs.tu-varna.bg/"
            },
            {
              name: "Varna University of Management",
              nofficer: "Dr. Deepika Kaur",
              link: "https://vum.bg/"
            }
          ]
        },

        {
          country: "CHINA",
          flag: "/static/flags/flagChina.jpg",
          unis: [
            {
              name: "Nanjing Forestry University",
              nofficer: "Dr. Sanchita B Ghosh/ Mr. Firoz Alam",
              link: "http://eng.njfu.edu.cn/"
            }
          ]
        },

        {
          country: "CZECHIA",
          flag: "/static/flags/flagCzech.jpg",
          unis: [
            {
              name: "University of Ostrava Czech Republic",
              nofficer: "Dr Amita Nandal",
              link: "https://www.osu.eu/"
            }
          ]
        },

        {
          country: "FRANCE",
          flag: "/static/flags/flagFrance.jpg",
          unis: [
            {
              name: "CESI",
              nofficer: "Prof. Rajveer Shekhawat",
              link: "https://www.cesi.fr/"
            },
            {
              name: "Ecole Centrale De Nantes",
              nofficer: "Dr. Ravi Kumar Gupta",
              link: "https://www.ec-nantes.fr/"
            },
            {
              name: "EPF Ecole",
              nofficer: "Dr Amit Saraswat ",
              link: "http://www.epf.fr/en"
            },
            {
              name: "ESIGELEC",
              nofficer: "",
              link: "http://www.esigelec.fr/en"
            },
            {
              name:
                "ESTACA – Ecole Superieure des Techniques Aeronautiques et de Construction Automobile",
              nofficer: "Dr. Ashish Malik",
              link: "https://www.estaca.fr/"
            },
            {
              name: "L’Ecole Bleue School of Global Design",
              nofficer: "Prof. Madhura Yadav",
              link: "http://www.ecole-bleue.fr/"
            },
            {
              name: "Network of Engineering Institutes",
              nofficer: "Dr. Amit Saraswat",
              link: "https://google.com"
            },
            {
              name: "Rennes School of Business",
              nofficer: "",
              link: "https://www.rennes-sb.com/"
            }
          ]
        },

        {
          country: "GERMANY",
          flag: "/static/flags/flagGermany.jpg",
          unis: [
            {
              name: "Hochschule Bremen University",
              nofficer: "Mr. Hemant Aggarwal",
              link: "https://www.hs-bremen.de/internet/de/"
            },
            {
              name:
                "Hochschule Bremen (HSB) City University of Applied Sciences",
              nofficer: "Mr. Hemant Aggarwal",
              link: "https://www.hs-bremen.de/internet/en/index.html"
            }
          ]
        },

        {
          country: "HUNGARY",
          flag: "/static/flags/flagHungary.jpg",
          unis: [
            {
              name: "Szechenyi Istvan University",
              nofficer: "Mr. Amit Datta",
              link: "https://uni.sze.hu/en_GB/home"
            }
          ]
        },

        {
          country: "KAZAKHSTAN",
          flag: "/static/flags/flagKazakhstan.jpg",
          unis: [
            {
              name: "AL Farabi Kazakh National University",
              nofficer: "Ajay Kumar Sharma",
              link: "https://www.kaznu.kz/en/"
            }
          ]
        },

        {
          country: "MALAYSIA",
          flag: "/static/flags/flagMalaysia.jpg",
          unis: [
            {
              name: "Curtin University",
              nofficer: "Dr Abhishek Sharma",
              link: "https://www.curtin.edu.my/"
            },
            {
              name: "Global Nxt University",
              nofficer: "Dr. Samar Sarabhai",
              link: "https://www.globalnxt.edu.my/"
            },
            {
              name: "Universiti Malaysia Pahang",
              nofficer: "Dr. Santosh Patil",
              link: "http://www.ump.edu.my/"
            }
          ]
        },

        {
          country: "MALTA",
          flag: "/static/flags/flagMalta.jpg",
          unis: [
            {
              name: "University of Malta",
              nofficer: "Mohit Jain and Princy Randhawa",
              link: "https://www.um.edu.mt/"
            }
          ]
        },

        {
          country: "NEPAL",
          flag: "/static/flags/flagNepal.jpg",
          unis: [
            {
              name: "Kathmandu University",
              nofficer: "Dr Dhaneshwar Mishra",
              link: "https://www.ku.edu.np/"
            }
          ]
        },

        {
          country: "NEW ZEALAND",
          flag: "/static/flags/flagNewzealand.jpg",
          unis: [
            {
              name: "Otago Polytechnic",
              nofficer: "Dr Rajesh Solanki",
              link: "https://www.op.ac.nz/"
            },
            {
              name: "Universal College of Learning",
              nofficer: "Prof. Pratibha Sharma",
              link: "https://www.ucol.ac.nz/"
            }
          ]
        },

        {
          country: "POLAND",
          flag: "/static/flags/flagPoland.jpg",
          unis: [
            {
              name: "Warsaw Management University",
              nofficer: "Dr. Akhilesh Sharma",
              link: "http://www.wsm.warszawa.pl/en/"
            }
          ]
        },

        {
          country: "PORTUGAL",
          flag: "/static/flags/flagPortugal.jpg",
          unis: [
            {
              name: "Instituto Superior de Engenharia do Porto (ISEP)",
              nofficer: "Dr. Nitin Goyal",
              link: "https://www.isep.ipp.pt/"
            },
            {
              name: "Polytechnic Institute of Leiria",
              nofficer: "Dr Naina Narang",
              link: "https://www.ipleiria.pt/home/"
            }
          ]
        },

        {
          country: "RUSSIA",
          flag: "/static/flags/flagRussia.jpg",
          unis: [
            {
              name: "AEROHELP Institute of Air and Space Law",
              nofficer: "Mr Prabhpreet Singh",
              link: "https://aerohelp.com/en"
            },
            {
              name: "Bauman Moscow State Technical University",
              nofficer: "",
              link: "http://www.bmstu.ru/en/"
            },
            {
              name: "Gubkin University",
              nofficer: "",
              link: "http://en.gubkin.ru/"
            },
            {
              name: "ITMO University",
              nofficer: "Ajay Kumar Sharma",
              link: "https://en.itmo.ru/"
            },
            {
              name:
                "Russian  State Social University (General Cooperation  Agreement)",
              nofficer: "",
              link: "https://en.rgsu.net/"
            },
            {
              name: "Siberian Federal University",
              nofficer: "Prof. Anand Gupta Chakinala",
              link: "http://www.sfu-kras.ru/en"
            },
            {
              name: "Southern Federal University",
              nofficer: "Prof. Sandeep Joshi",
              link: "https://sfedu.ru/"
            }
          ]
        },

        {
          country: "SERBIA",
          flag: "/static/flags/flagSerbia.jpg",
          unis: [
            {
              name:
                "Mathematical Institute of the Serbian Academy of Sciences and Arts",
              nofficer: "Dr Santosh Patil",
              link: "http://www.mi.sanu.ac.rs/"
            }
          ]
        },

        {
          country: "SINGAPORE",
          flag: "/static/flags/flagSingapore.jpg",
          unis: [
            {
              name:
                "Electronic & Computer Engineering Division, Ngee Ann Polytechnic",
              nofficer: "Mr. Mahesh Jangid",
              link: "https://www.np.edu.sg/soe/Pages/ece.aspx"
            },
            {
              name:
                "University of Applied Science, Western Switzerland, Summer University Switzerland Courses",
              nofficer: "Prof. Sandeep Joshi",
              link: "https://google.com"
            }
          ]
        },

        {
          country: "SOUTH AFRICA",
          flag: "/static/flags/flagSouthafrica.jpg",
          unis: [
            {
              name: "University of Johannesburg",
              nofficer: "Dr. Anand Pandey/ Dr. Manish Rawat",
              link: "https://www.uj.ac.za/"
            }
          ]
        },

        {
          country: "SOUTH WALES",
          flag: "/static/flags/flagWales.png",
          unis: [
            {
              name: "University of South Wales",
              nofficer: "Ajay Kumar Sharma",
              link: "https://www.southwales.ac.uk/"
            }
          ]
        },

        {
          country: "THAILAND",
          flag: "/static/flags/flagThailand.jpg",
          unis: [
            {
              name: "King Mongkut’s University of Technology",
              nofficer: "Dr. Akhilesh Kumar Sharma",
              link: "https://kmutnb.ac.th/"
            }
          ]
        },

        {
          country: "UAE",
          flag: "/static/flags/flagUAE.jpg",
          unis: [
            {
              name: "Ajman University",
              nofficer: "Ravi Kant Gupta",
              link: "https://www.ajman.ac.ae/en"
            }
          ]
        },

        {
          country: "UK",
          flag: "/static/flags/flagUK.jpg",
          unis: [
            {
              name: "Association of Chartered Certified Accountants",
              nofficer: "Prof. M. L. Vadera",
              link: "https://www.accaglobal.com/in/en.html"
            },
            {
              name: "Chartered Institute of Management Accountants",
              nofficer: "Prof. M. L. Vadera",
              link: "https://www.cimaglobal.com/"
            },
            {
              name: "Cranfield University, England",
              nofficer: "Prof. G. L. Sharma",
              link: "https://www.cranfield.ac.uk/"
            },
            {
              name: "Edinburgh Napier University",
              nofficer: "Dr Sumit Srivastava",
              link: "https://www.napier.ac.uk/"
            },
            {
              name: "International Skills Development Corporation",
              nofficer: "Prof. M. L. Vadera",
              link: "https://isdcglobal.org/"
            },
            {
              name: "Nottingham Trent University",
              nofficer: "Prof Pratibha Sharma",
              link: "https://www.ntu.ac.uk/"
            },
            {
              name: "Plymouth University (Psychology Dept)",
              nofficer: "Prof. Geetika Tankha",
              link: "https://www.plymouth.ac.uk/schools/psychology"
            },
            {
              name: "University of Leicester, UK  (MoU)",
              nofficer: "Dr. Nilanjan Haldar",
              link: "uk"
            },
            {
              name: "University of Strathclyde",
              nofficer: "Prof. Manish Tiwari",
              link: "https://www.strath.ac.uk/"
            }
          ]
        },

        {
          country: "USA",
          flag: "/static/flags/flagUSA.jpg",
          unis: [
            {
              name: "California State University Monterey Bay (CSUMB)",
              nofficer: "Dr. Prof. Raghuvir Singh",
              link: "https://csumb.edu/"
            },
            {
              name: "Florida International University",
              nofficer: "Dr. Sandeep Chaurasia",
              link: "https://www.fiu.edu/"
            },
            {
              name: "Illinois State University Illinois",
              nofficer: "Dr Gaurav Sancheti",
              link: "https://illinoisstate.edu/"
            },
            {
              name: "Iowa State University",
              nofficer: "Mr. Ankit Mundra",
              link: "https://www.iastate.edu/"
            },
            {
              name: "National  Education Foundation",
              nofficer: "Dr Deepshikha Sharma",
              link: "https://www.nefuniversity.org/"
            },
            {
              name: "St. Cloud State University Minnesota",
              nofficer: "Dr. Sumit Srivastava",
              link: "https://www.stcloudstate.edu/"
            },
            {
              name: "TRC Worldwide Engineering Virginia ",
              nofficer: "Dr Tanmoy Chakraborty ",
              link: "http://www.trcww.com/"
            },
            {
              name: "University of  Denver Colorado",
              nofficer: "",
              link: "https://www.du.edu/"
            },
            {
              name: "University of Florida ",
              nofficer: "Dr. Punit Gupta",
              link: "http://www.ufl.edu/"
            },
            {
              name:
                "University of Missouri- Kansas City (UMKC), USA MoA (Ariculation) UMKC’s School of Computing and Engineering",
              nofficer: "Dr. Amit Soni",
              link: "https://www.umkc.edu/"
            }
          ]
        },

        {
          country: "UKRAINE",
          flag: "/static/flags/flagUkraine.jpg",
          unis: [
            {
              name: "National Technical University of Ukraine ",
              nofficer: "Mr. Vidyadhar Aski",
              link: "https://kpi.ua/en"
            }
          ]
        },

        {
          country: "UZBEKISTAN",
          flag: "/static/flags/flagUzbekistan.jpg",
          unis: [
            {
              name: "National University of Uzbekistan",
              nofficer: "Ajay Kumar Sharma",
              link: "https://www.nuu.uz/eng"
            }
          ]
        }

        /* {
          country : 'France',
          flag : '/static/flags/flagFrance.jpg',
          unis: [
            { name : 'check1.1' },
            { name : 'check1.2' }
          ]
        },

        desserts: [
          {
            name: 'The International Association for the Exchange of Students for Technical Experience (IAESTE)',
            nofficer: 'Prof. D. P. Sharma',
            link: 'https://www.iaestemuj.in/'
          },
          {
            name: 'Agreement of Cooperation (Agreement)',
            nofficer: 'Dr. Nilanjan Haldar',
            link: 'https://google.com'
          },          {
            name: 'AIESEC Jaipur ',
            nofficer: 'Mr Harshwardhan Soni',
            link: 'https://www.aiesec.in/city/jaipur/'
          },
           {
            name: 'Student  Exchange Agreement ',
            no: 50,
            nofficer: '',
            link: 'https://google.com'
          },
           {
            name: 'National Law College',
            no: 72,
            nofficer: 'Prabhpreet Singh',
            link: 'https://google.com'
          },
        ], */
      ]
    };
  }
};
</script>
