<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header card-header-primary card-header-icon">
            <div class="card-icon">
              <i class="material-icons">assignment</i>
            </div>
            <h4 class="card-title">
              {{ $t('global.table') }}
              <strong>{{ $t('cruds.booking.title') }}</strong>
            </h4>
          </div>
          <div class="card-body">
            <router-link
              class="btn btn-primary"
              v-if="$can(xprops.permission_prefix + 'create')"
              :to="{ name: xprops.route + '.create' }"
            >
              <i class="material-icons">
                add
              </i>
              {{ $t('global.add') }}
            </router-link>
            <button
              type="button"
              class="btn btn-default"
              @click="fetchIndexData"
              :disabled="loading"
              :class="{ disabled: loading }"
            >
              <i class="material-icons" :class="{ 'fa-spin': loading }">
                refresh
              </i>
              {{ $t('global.refresh') }}
            </button>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-md-12">
                <div class="table-overlay" v-show="loading">
                  <div class="table-overlay-container">
                    <material-spinner></material-spinner>
                    <span>Loading...</span>
                  </div>
                </div>
                <datatable
                  :columns="columns"
                  :data="data"
                  :total="total"
                  :query="query"
                  :xprops="xprops"
                  :HeaderSettings="false"
                  :pageSizeOptions="[10, 25, 50, 100]"
                >
                  <global-search :query="query" class="pull-left" />
                  <header-settings :columns="columns" class="pull-right" />
                </datatable>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import DatatableActions from '@components/Datatables/DatatableActions'
import TranslatedHeader from '@components/Datatables/TranslatedHeader'
import HeaderSettings from '@components/Datatables/HeaderSettings'
import GlobalSearch from '@components/Datatables/GlobalSearch'
import DatatableList from '@components/Datatables/DatatableList'
import DatatableEnum from '@components/Datatables/DatatableEnum'
import DatatableSingle from '@components/Datatables/DatatableSingle'

export default {
  components: {
    GlobalSearch,
    HeaderSettings
  },
  data() {
    return {
      columns: [
        {
          title: 'cruds.booking.fields.id',
          field: 'id',
          thComp: TranslatedHeader,
          sortable: true,
          colStyle: 'width: 100px;'
        },
        {
          title: 'cruds.booking.fields.customer',
          field: 'customer',
          thComp: TranslatedHeader,
          sortable: true
        },
        {
          title: 'cruds.booking.fields.phone_number',
          field: 'phone_number',
          thComp: TranslatedHeader,
          sortable: true
        },
        {
          title: 'cruds.booking.fields.booking_day',
          field: 'booking_day',
          thComp: TranslatedHeader,
          sortable: true
        },
        {
          title: 'cruds.booking.fields.slect_room',
          field: 'slect_room.room_name',
          thComp: TranslatedHeader,
          tdComp: DatatableList
        },
        {
          title: 'cruds.booking.fields.select_service',
          field: 'select_service.name',
          thComp: TranslatedHeader,
          tdComp: DatatableList
        },
        {
          title: 'cruds.booking.fields.total_price',
          field: 'total_price',
          thComp: TranslatedHeader,
          sortable: true
        },
        {
          title: 'cruds.booking.fields.status',
          field: 'status',
          thComp: TranslatedHeader,
          sortable: true,
          tdComp: DatatableEnum
        },
        {
          title: 'cruds.booking.fields.promotion',
          field: 'promotion.code',
          thComp: TranslatedHeader,
          tdComp: DatatableSingle,
          sortable: true
        },
        {
          title: 'global.actions',
          thComp: TranslatedHeader,
          tdComp: DatatableActions,
          visible: true,
          thClass: 'text-right',
          tdClass: 'text-right td-actions',
          colStyle: 'width: 150px;'
        }
      ],
      query: { sort: 'id', order: 'desc', limit: 100, s: '' },
      xprops: {
        module: 'BookingsIndex',
        route: 'bookings',
        permission_prefix: 'booking_'
      }
    }
  },
  beforeDestroy() {
    this.resetState()
  },
  computed: {
    ...mapGetters('BookingsIndex', ['data', 'total', 'loading'])
  },
  watch: {
    query: {
      handler(query) {
        this.setQuery(query)
        this.fetchIndexData()
      },
      deep: true
    }
  },
  methods: {
    ...mapActions('BookingsIndex', ['fetchIndexData', 'setQuery', 'resetState'])
  }
}
</script>
