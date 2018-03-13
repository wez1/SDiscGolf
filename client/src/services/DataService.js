import Api from '@/services/Api'

export default {
  getTracks () {
    return Api().get('gettrack')
  }
}
