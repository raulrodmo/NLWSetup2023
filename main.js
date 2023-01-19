const form = document.querySelector('#form_habits')
const nlwSetup = new NLWSetup(form)

const data= {
    academy: ['01-01', '01-02','01-06','01-05','01-07','01-08'],
    water: ['01-01', '01-02','01-06'],
    food: ['01-01', '01-02','01-06'],
    small_guitar: ['01-01', '01-02','01-06'],
    computer: ['01-01', '01-02','01-06'],
    reading: ['01-01', '01-02','01-06'],

}

nlwSetup.setData(data)
nlwSetup.load()