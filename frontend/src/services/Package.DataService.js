import http from '../http-common'
class PackageDataService {
  getAll () {
    return http.get('/package')
  }

  create (data) {
    return http.post('/package', data)
  }

  get (id) {
    return http.get(`/package/${id}`)
  }

  update (id, data) {
    return http.put(`/package/${id}`, data)
  }

  delete (id) {
    return http.delete(`/package/${id}`)
  }
}
export default new PackageDataService()