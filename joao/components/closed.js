Vue.component('user', {
    props: ['object', 'error'],
    template:
        `
    <div>
      <label v-if="error" class="label_error">{{ error }}</label>
      <input type="text" required="required" name="user" v-model="object.name" maxlength="10"/>
    </div>
    `
});

Vue.component('password', {
    props: ['object', 'error'],
    template:
        `
      <input type="password" required="required" v-model="object.password" pattern="[0-9]+$" maxlength="12"/>
      `
});

Vue.component('email', {
    props: ['object', 'error'],
    template:
        `
    <input type="email" required="required" class="input-text" v-model="object.email" name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$" />
    `
});

Vue.component('phone', {
    props: ['phone'],
    template:
        `
      <input type="tel" required="required" maxlength="15" name="phone" pattern="\\([0-9]{2}\\) [0-9]{4,6}-[0-9]{3,4}$" />
      `
});

Vue.component('type', {
    props: ['object', 'choices' ,'error'],
    template:
        `
    <div>
      <label for="title">Tipo: </label>
      <select v-model="object.type" required="required">
       <option v-for="item in choices" :value="item.value">{{ item.title }}</option>
      </select>
    </div>
    `
});

Vue.component('cpf', {
    props: ['cpf'],
    template: `<div><label>Cpf:</label><br><input type="text" required="required" name="cpf" maxlength="20"></div>`
});

Vue.component('cnpj', {
    props: ['cnpj'],
    template: `<div><label>Cnpj:</label><br><input type="text" required="" name="cnpj" maxlength="20"></div>`
});

Vue.component('zip-code', {
    props: ['zip-code'],
    template: `<input type="tel" required="required" maxlength="10" name="zip-code"  pattern="[0-9]{2}.[0-9]{3}-[0-9]{3}$" >`
});

Vue.component('street', {
    props: ['street'],
    template: `<input type="text" required="required" name="neighborhood" maxlength="100">`
});

Vue.component('number', {
    props: ['number'],
    template: `<input type="text" required="required" name="number" maxlength="10">`
});

Vue.component('neighbourhood', {
    props: ['neighborhood'],
    template: `<input type="text" required="required" name="neighbourhood" maxlength="50">`
});

Vue.component('city', {
    props: ['city'],
    template: `<input type="text" required="required" name="city" maxlength="50">`
});

Vue.component('state', {
    props: ['state'],
    template: `<input type="text" required="required" name="state" maxlength="50">`
});

Vue.component('country', {
    props: ['country'],
    template: `<input type="text" required="required" name="country" maxlength="50">`
});

Vue.component('date', {
    props: ['date'],
    template: `
    <input type="date" required="required" maxlength="10" name="date" 
    pattern="[0-9]{2}\\/[0-9]{2}\\/[0-9]{4}$" min="2012-01-01" max="2014-02-18">
    `
});
