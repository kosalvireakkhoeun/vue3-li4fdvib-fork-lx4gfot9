import '~/theme/src/clay.css';
import '~/theme/src/main.css';
import ListUser from '~/listUser/src/ListUser.vue';

export const ListUserWithHiddenCheckbox = () => ({
  components: { ListUser },
  data: function() {
    return {
        contacts: [
          {
            id: '1',
            name: 'John Doe',
            email: 'John.hor@khalibre.com',
            phone: '',
            avatar: 'https://www.w3schools.com/howto/img_avatar.png',
          },
          {
            id: '2',
            name: 'John Doe',
            email: 'John.hor@khalibre.com',
            phone: '',
            avatar: 'https://www.w3schools.com/howto/img_avatar.png',
          },
          {
            id: '3',
            name: 'John Doe',
            email: 'John.hor@khalibre.com',
            phone: '',
            avatar: 'https://www.w3schools.com/howto/img_avatar.png',
          },
          {
            id: '4',
            name: 'John Doe',
            email: 'John.hor@khalibre.com',
            phone: '',
            avatar: 'https://www.w3schools.com/howto/img_avatar.png',
          },
        ],
        contact: {
            name: 'John Doe',
            email: 'John.hor@khalibre.com',
            phone: '',
            avatar: 'https://www.w3schools.com/howto/img_avatar.png',
        },
        selectedContacts: [],
    }
  },
  methods: {
    onClickListUser() {
      console.log('onClickListUser');
    }
  },
  template: `
    <ul
      class="list-user z-index-10 cec-p-4 consent-scroll-content"
      style="max-width: 300px;"
      x-placement="bottom-start">
      <li v-for="(contact, index) in contacts" class="d-flex cec-mb-3 flex-column cursor-pointer">
        <label :for="contact.id" class="d-flex align-items-center cec-mr-4" @click="onClickListUser">
          <input
              class="cec-mr-4 cec-mt-2 d-none"
              type="checkbox"
              :id="contact.id"
              :value="contact"
              v-model="selectedContacts"
          />
          <list-user
              :user="contact"
          ></list-user>
        </label>
      </li>
    </ul>
    <h2 class="cec-mt-4">Selected Contacts</h2>
    <pre class="cec-mt-4">
      {{ selectedContacts }}</pre>
  `,
});

export const ListUserWithShowCheckbox = () => ({
  components: { ListUser },
  data: function() {
    return {
        contacts: [
          {
            id: '1',
            name: 'John Doe',
            email: 'John.hor@khalibre.com',
            phone: '',
            avatar: 'https://www.w3schools.com/howto/img_avatar.png',
          },
          {
            id: '2',
            name: 'John Doe',
            email: 'John.hor@khalibre.com',
            phone: '',
            avatar: 'https://www.w3schools.com/howto/img_avatar.png',
          },
          {
            id: '3',
            name: 'John Doe',
            email: 'John.hor@khalibre.com',
            phone: '',
            avatar: 'https://www.w3schools.com/howto/img_avatar.png',
          },
          {
            id: '4',
            name: 'John Doe',
            email: 'John.hor@khalibre.com',
            phone: '',
            avatar: 'https://www.w3schools.com/howto/img_avatar.png',
          },
          {
            id: '5',
            name: 'John Doe',
            email: 'John.hor@khalibre.com',
            phone: '',
            avatar: 'https://www.w3schools.com/howto/img_avatar.png',
          },
          {
            id: '6',
            name: 'John Doe',
            email: 'John.hor@khalibre.com',
            phone: '',
            avatar: 'https://www.w3schools.com/howto/img_avatar.png',
          },
        ],
        contact: {
            name: 'John Doe',
            email: 'John.hor@khalibre.com',
            phone: '',
            avatar: 'https://www.w3schools.com/howto/img_avatar.png',
        },
        selectedContacts: [],
    }
  },
  methods: {
    onClickListUser() {
      console.log('onClickListUser');
    }
  },
  template: `
    <ul
      class="list-user z-index-10 cec-p-4 consent-scroll-content"
      style="max-width: 300px;"
      x-placement="bottom-start">
      <li v-for="(contact, index) in contacts" class="d-flex cec-mb-3 flex-column cursor-pointer">
        <label :for="contact.id" class="d-flex align-items-center cec-mr-4" @click="onClickListUser">
          <input
              class="cec-mr-4"
              type="checkbox"
              :id="contact.id"
              :value="contact"
              v-model="selectedContacts"
          />
          <list-user
              :user="contact"
          ></list-user>
        </label>
      </li>
    </ul>
    <h2 class="cec-mt-4">Selected Contacts</h2>
    <pre class="cec-mt-4">
      {{ selectedContacts }}</pre>
  `,
});