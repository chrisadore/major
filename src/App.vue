<template>
  <v-app>
    <v-app-bar app height="82" class="mx-auto elevation-0"  color="#c40018">
      <v-flex
        ><v-card shaped width="270" color="#FFffff" class="elevation-1"
          ><router-link to="/">
            <div class="pa-2">
              <v-img
                alt="Logo"
                class="shrink ma-1"
                contain
                src="/static/logoxmix2.png"
                transition="scale-transition"
              />
            </div> </router-link></v-card
      ></v-flex>
      <v-flex>
        <div class="text-center">
          
   
  </div>
      </v-flex>
      <v-app-bar-nav-icon
        right
        @click.stop="drawer = !drawer"
        color="#fffff0"
        class="mdi-dots-horizontal hidden-lg-and-up"
      ></v-app-bar-nav-icon>
      <v-toolbar-items class="hidden-md-and-down" right>
        <v-btn
          text
          depressed
          color="#fffff0"
          v-for="item in navItems"
          :key="item.title"
          router
          :to="item.link"
        >
          <v-icon small left color="#faf4ff">{{ item.icon }}</v-icon>
          <span class="tool white--text">{{ item.title }}</span>
        </v-btn>
        <v-btn
          text
          depressed
          color="#fffff0"
          href="https://www.iaestemuj.in/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <v-icon small left color="#faf4ff"> mdi-flag </v-icon>
          <span class="tool white--text">IAESTE </span>
        </v-btn>
        <v-btn
          text
          depressed
          color="#fffff0"
          href="https://jaipur.manipal.edu/muj/academics.html"
          rel="noopener noreferrer"
          target="_blank"
        >
          <v-icon small left color="#faf4ff"> mdi-airplane </v-icon>
          <span class="tool white--text">International Programes </span>
        </v-btn>
      </v-toolbar-items>
      <!--       <v-app-bar-nav-icon right @click.stop="drawer2 = !drawer2" color="black" ></v-app-bar-nav-icon>    -->
    </v-app-bar>
    <v-navigation-drawer
      temporary
      v-model="drawer"
      color="#263238"
      fixed
      right
      overlay-opacity="0.9"
    >
      <v-card height="82" class="mx-auto" tile outlined color="#c40018"
        ><v-img
          alt="Logo"
          class="shrink mr-2 ma-3"
          contain
          height="60px"
          src="/static/manipal2.png"
          transition="scale-transition"
      /></v-card>
      <v-list fixed>
        <v-list-item-group
          v-model="group"
        >
          <v-list-item
            v-for="item in navItems"
            :key="item.title"
            router
            :to="item.link"
          >
            <v-list-item-title style="color: #ffffff">
              <v-icon left color="#ffffff">{{ item.icon }}</v-icon>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>
              <a
                href="https://www.iaestemuj.in/"
                style="color: #ffffff"
                rel="noopener noreferrer"
                target="_blank"
              >
                <v-flex class=" white--text"
                  ><v-icon left color="#ffffff">mdi-flag</v-icon>
                  IAESTE</v-flex
                >
              </a>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>
              <a
                href="https://jaipur.manipal.edu/muj/academics.html"
                style="color: #ffffff"
                rel="noopener noreferrer"
                target="_blank"
              >
                <v-flex class=" white--text"
                  ><v-icon left color="#ffffff">mdi-airplane</v-icon>
                  International Programes</v-flex
                >
              </a>
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <main>
      <router-view> </router-view>
    </main>
    <br />

    <v-flex>
  <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="blue-grey darken-4 white--text text-center flex"
    >
      <v-card-text>
                  <v-btn v-for="item in menuItems"
                :key="item.title"
                    v-on="on"
                    class="mr-7"
                    icon
                    color="white"
                    :href="item.link"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <v-icon size="27px">{{ item.icon }}</v-icon>
                  </v-btn>
              <v-btn
              icon
      @click="sheet = !sheet"
    >
      <v-icon>mdi-map-marker</v-icon>
    </v-btn>
    
        <v-bottom-sheet v-model="sheet">
      <v-sheet class="text-center" height="300px">
        <div><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6118.014190332265!2d75.5605167518837!3d26.844955838214943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4850e05bee9b%3A0x1b8d67402d4eb863!2sManipal%20University%20Jaipur!5e0!3m2!1sen!2sca!4v1583850845469!5m2!1sen!2sca" width="100%" height="300" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
          </div>
      </v-sheet>
    </v-bottom-sheet>
      </v-card-text>

      <v-card-text class="white--text overline pt-0">
        Developed by Christy Isadore || Copyright © Manipal University Jaipur 
      </v-card-text>
      <v-divider></v-divider>

      <v-card>
        <v-card-text class="overline white--text">
       <strong> @{{ new Date().getFullYear() }} </strong> Manipal University Jaipur,
              Jaipur-Ajmer Expressway, Rajasthan 303007
      </v-card-text>
      </v-card>
    </v-card>
  </v-footer>
</v-flex>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
      sheet: false,
    drawer: false,
    drawer2: false,
    group: null
  }),
  watch: {
    group() {
      this.drawer = false;
      this.drawerw = false;
    }
  },
  computed: {
    menuItems() {
      let menuItems = [
        {
          icon: "mdi-facebook",
          link: "https://www.facebook.com/manipal.university/",
          col: "#3b5998",
          handle: "facebook"
        },
        {
          icon: "mdi-twitter",
          link: "https://twitter.com/Jaipur_Manipal",
          col: "#00acee",
          handle: "twitter"
        },
        {
          icon: "mdi-instagram",
          link: "https://www.instagram.com/jaipurmanipal/?hl=en",
          col: "#DD2A7B",
          handle: "instagram"
        },
        {
          icon: "mdi-youtube",
          link: "https://www.youtube.com/channel/UCFbeX4UJyd4fHTCnCVGob_Q",
          col: "#c4302b",
          handle: "youtube"
        },
        {
          icon: "mdi-linkedin",
          link:
            "https://www.linkedin.com/in/manipal-university-jaipur-4a56a310a/",
          col: "#0072b1",
          handle: "linkedin"
        }
      ];
      return menuItems;
    },

    navItems() {
      let navItems = [
        {
          icon: "mdi-school",
          title: "Partner Universities",
          link: "/partner_universities"
        },
        { icon: "mdi-script", title: "Guidelines", link: "/guidelines" },
        { icon: "mdi-map-marker", title: "Visits", link: "/visits" },
        { icon: "mdi-fountain-pen-tip", title: "Apply", link: "/apply" }
      ];
      return navItems;
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Varela+Round");

.tool {
  font-size: 12px;
}
a {text-decoration: none;
  color: hotpink;
}
.t {
  text-decoration: none;
}

body {
  text-align: justify;
}
p {
  color: #262623;
}
ul {
  color: #262623;
}
  ::-webkit-scrollbar {
  width: 10px;
} 

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 2px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
  border-radius: 2px;
}
</style>
