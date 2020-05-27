module.exports = {
    discord: {
        invite: /\b(https?:\/\/)?(www\.)?(discord\.(gg|io|me|li)|(discordapp|discord)\.com\/invite)\/\w+[a-z]/gi,
        userOrMember: /^(?:<@!?)?(\d{17,19})>?$/,
        channel: /^(?:<#)?(\d{17,19})>?$/,
        role: /^(?:<@&)?(\d{17,19})>?$/,
        snowflake: /^(\d{17,19})$/,
        emoji: /^(?:<a?:\w{2,32}:)?(\d{17,19})>?$/,
        username: /.{2,32}/,
        inviteV2: /(http(s)?:\/\/)?(www\.)?(discord\.(gg|li|me|io)|discordapp\.com\/invite|invite\.gg)\/.\w+/,
        discriminator: /(#)\d{4}/,
        tag: /.{2,32}(#)\d{4}/,
        token: /[\w]{24}\.[\w]{6}\.[\w-_]{27}/,
    },
    passwordChecker: /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/,
    validateEmail: /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm,
    validatePhoneNumber: /^\+?\d{1,3}?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/,
    validateDate: /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/,
    youtube: /http:\/\/(?:youtu\.be\/|(?:[a-z]{2,3}\.)?youtube\.com\/watch(?:\?|#\!)v=)([\w-]{11}).*/gi,
    validateCreditCard: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
    facebook: /(?:http:\/\/)?(?:www\.)?facebook\.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[\w\-]*\/)*([\w\-]*)/,
}