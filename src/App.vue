<template>
  <v-app>
    <v-app-bar app height="90" class="mx-auto">
      <v-flex
        ><v-card shaped width="250" color="#FAAF16"
          ><router-link to="/">
            <div class="pa-2">
              <v-img
                alt="Logo"
                class="shrink mr-2"
                contain
                src="/static/logox.jpg"
                transition="scale-transition"
              />
            </div> </router-link></v-card
      ></v-flex>

      <v-app-bar-nav-icon
        right
        @click.stop="drawer = !drawer"
        color="#FAAF16"
        class="mdi-dots-horizontal hidden-md-and-up"
      ></v-app-bar-nav-icon>
      <v-toolbar-items class="hidden-xs-only && hidden-sm-only" right>
        <v-btn
          text
          depressed
          color="#FAAF16"
          v-for="item in navItems"
          :key="item.title"
          router
          :to="item.link"
        >
          <v-icon small left color="amber darken-3">{{ item.icon }}</v-icon>
          <span class="tool">{{ item.title }}</span>
        </v-btn>
        <v-btn
          text
          depressed
          color="#FAAF16"
          href="https://www.iaestemuj.in/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <v-icon small left color="amber darken-3"> mdi-flag </v-icon>
          <span class="tool">IAESTE </span>
        </v-btn>
        <v-btn
          text
          depressed
          color="#FAAF16"
          href="https://jaipur.manipal.edu/muj/academics.html"
          rel="noopener noreferrer"
          target="_blank"
        >
          <v-icon small left color="amber darken-3"> mdi-airplane </v-icon>
          <span class="tool">International Programes </span>
        </v-btn>
      </v-toolbar-items>
      <!--       <v-app-bar-nav-icon right @click.stop="drawer2 = !drawer2" color="black" ></v-app-bar-nav-icon>    -->
    </v-app-bar>

    <v-navigation-drawer
      temporary
      v-model="drawer"
      fixed
      right
      overlay-opacity="0.9"
    >
      <v-card height="90" class="mx-auto" tile outlined color="#FAAF16"
        ><v-img
          alt="Logo"
          class="shrink mr-2 ma-3"
          contain
          height="60px"
          src="/static/flogo.png"
          transition="scale-transition"
      /></v-card>
      <v-list fixed>
        <v-list-item-group
          v-model="group"
          active-class="deep-orange--text text--accent-4"
        >
          <v-list-item
            v-for="item in navItems"
            :key="item.title"
            router
            :to="item.link"
          >
            <v-list-item-title style="color: #FAAF16">
              <v-icon left color="amber darken-3">{{ item.icon }}</v-icon>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>
              <a
                href="https://www.iaestemuj.in/"
                style="color: #FAAF16"
                rel="noopener noreferrer"
                target="_blank"
              >
                <v-flex
                  ><v-icon left color="amber darken-3">mdi-flag</v-icon>
                  IAESTE</v-flex
                >
              </a>
            </v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>
              <a
                href="https://jaipur.manipal.edu/muj/academics.html"
                style="color: #FAAF16"
                rel="noopener noreferrer"
                target="_blank"
              >
                <v-flex
                  ><v-icon left color="amber darken-3">mdi-airplane</v-icon>
                  International Programes</v-flex
                >
              </a>
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <!-- <template v-slot:append>
        <v-img class="mx-auto" width="100" src="./components/static/mext.png"></v-img>
      </template> -->
    </v-navigation-drawer>

    <main>
      <router-view> </router-view>
    </main>
    <br />

    <template>
      <v-footer dark padless class="mt-10">
        <v-card class="flex" flat tile>
          <v-card-title class="blue-grey darken-4 mx-auto">
            <strong class="overline mx-auto">Connect with us!</strong>

            <v-spacer></v-spacer>

            <v-card class="transparent elevation-0">
              <v-tooltip
                light
                v-for="item in menuItems"
                :key="item.title"
                color="black"
                top
              >
                <template class="mx-auto" v-slot:activator="{ on }">
                  <v-btn
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
                </template>
                <span>{{ item.handle }}</span>
              </v-tooltip>
              <!-- <v-tooltip light 
      color="black"
      top>
          <template class="mx-auto" v-slot:activator="{ on }">
                 <v-btn
             v-on="on"
            class="mx-3"
            icon
            color="blue"
            href="https://www.mext.in/" rel="noopener noreferrer" target="_blank" 
          >   <v-img width="15px" src="./components/static/black.png"></v-img>
          </v-btn>    
          </template>
          <span>mext</span>
        </v-tooltip> -->
            </v-card>
          </v-card-title>

          <v-card-text class="py-2 white--text grey darken-4 mx-auto">
            <div class=" text-center overline ">
              @{{ new Date().getFullYear() }} Manipal University Jaipur,
              Jaipur-Ajmer Expressway, Rajasthan 303007

              <!--  <v-img src="./components/static/white.png" width="50px"></v-img> -->
            </div>
          </v-card-text>
        </v-card>
      </v-footer>
    </template>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
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
          icon: "mdi-facebook-box",
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
        { icon: "mdi-calendar-edit", title: "Events", link: "/events" },
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
a {
  all: unset;
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
/* .tagline {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
    font-family: 'Varela Round', sans-serif;
    color: black;
    background: white;
    opacity: 0.8;
    border-radius: 5px;
    @media (max-width: 600px) {
      font-size: 1rem;
    }
  }
  ::-webkit-scrollbar {
  width: 10px;
} */

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
