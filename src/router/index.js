import Vue from 'vue'
import Router from 'vue-router'

import Introduction from '@/views/Introduction'
import PageNotFound from '@/views/PageNotFound'

import DataAmbulance from '@/views/DataAmbulance'
import DataKecamatan from '@/views/DataKecamatan'
import DataKelurahan from '@/views/DataKelurahan'
import DataKota from '@/views/DataKota'
import DataPetugasDinasKesehatan from '@/views/DataPetugasDinasKesehatan'
import DataPetugasDinasPerhubungan from '@/views/DataPetugasDinasPerhubungan'
import DataPetugasSatuanPolisiPamongPraja from '@/views/DataPetugasSatuanPolisiPamongPraja'
import DataPosPemadamKebakaran from '@/views/DataPosPemadamKebakaran'
import DataPosPolisiDaerah from '@/views/DataPosPolisiDaerah'
import DataPuskesmas from '@/views/DataPuskesmas'
import DataRumahSakitKhusus from '@/views/DataRumahSakitKhusus'
import DataRumahSakitUmum from '@/views/DataRumahSakitUmum'
import DataRw from '@/views/DataRw'
import DataTempatPembuanganSampah from '@/views/DataTempatPembuanganSampah'

Vue.use(Router)

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      name: 'Introduction',
      component: Introduction
    },
    {
      path: '/data-ambulance',
      name: 'DataAmbulance',
      component: DataAmbulance
    },
    {
      path: '/data-kecamatan',
      name: 'DataKecamatan',
      component: DataKecamatan
    },
    {
      path: '/data-kelurahan',
      name: 'DataKelurahan',
      component: DataKelurahan
    },
    {
      path: '/data-kota',
      name: 'DataKota',
      component: DataKota
    },
    {
      path: '/data-petugas-dinas-kesehatan',
      name: 'DataPetugasDinasKesehatan',
      component: DataPetugasDinasKesehatan
    },
    {
      path: '/data-petugas-dinas-perhubungan',
      name: 'DataPetugasDinasPerhubungan',
      component: DataPetugasDinasPerhubungan
    },
    {
      path: '/data-petugas-satuan-polisi-pamong-praja',
      name: 'DataPetugasSatuanPolisiPamongPraja',
      component: DataPetugasSatuanPolisiPamongPraja
    },
    {
      path: '/data-pos-pemadam-kebakaran',
      name: 'DataPosPemadamKebakaran',
      component: DataPosPemadamKebakaran
    },
    {
      path: '/data-pos-polisi-daerah',
      name: 'DataPosPolisiDaerah',
      component: DataPosPolisiDaerah
    },
    {
      path: '/data-puskesmas',
      name: 'DataPuskesmas',
      component: DataPuskesmas
    },
    {
      path: '/data-rumah-sakit-khusus',
      name: 'DataRumahSakitKhusus',
      component: DataRumahSakitKhusus
    },
    {
      path: '/data-rumah-sakit-umum',
      name: 'DataRumahSakitUmum',
      component: DataRumahSakitUmum
    },
    {
      path: '/data-rw',
      name: 'DataRw',
      component: DataRw
    },
    {
      path: '/data-tempat-pembuangan-sampah',
      name: 'DataTempatPembuanganSampah',
      component: DataTempatPembuanganSampah
    },
    {
      path: '*',
      component: PageNotFound
    }
  ]
})
