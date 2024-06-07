<script setup>
import { ListUser } from '../../index';

let contact = {
    'avatar': 'https://www.w3schools.com/howto/img_avatar.png',
    "createDate":null,
    'email': 'chetra.hor@khalibre.com',
    "id":"8110",
    "name":"Joe Dision"
};

const buttonPlaygroundCode = '<list-user :user="contact"></list-user>';
</script>

# cw-list-user

## Description

## Props

<Props :of="ListUser"></Props>

## Example

<Playground
  :code="buttonPlaygroundCode"
  :data-scope="{ contact }"
  :components="{ ListUser }">
</Playground>
