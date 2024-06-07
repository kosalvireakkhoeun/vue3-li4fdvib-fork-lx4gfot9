<template>
    <div class="d-flex">
        <img :src="user.avatar" class="aspect-ratio-bg-cover cec-user-profile img-circle" :alt="user.name" />
        <div class="cec-ml-2 subscriber-info-block">
            <strong v-if="user.name" class="text-dark d-block text-truncate">{{ user.name }}</strong>
            <span class="font-weight-lighter text-gray font-size-12 text-truncate mt-2">
                {{ user.email }}
            </span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        user: {
            type: Object,
            required: true,
            default(rawProps) {
                return {
                    id: '1',
                    name: 'John Doe',
                    email: 'John.hor@khalibre.com',
                    avatar: 'https://www.w3schools.com/howto/img_avatar.png',
                }
            }
        }
    },
}
</script>

<style lang="scss" scoped>
button {
    font-family: 'Lato', sans-serif;
}
</style>
