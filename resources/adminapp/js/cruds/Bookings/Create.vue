<template>
  <div class="container-fluid">
    <form @submit.prevent="submitForm">
      <div class="row">
        <div class="col-md-12">
          <div class="card">
            <div class="card-header card-header-primary card-header-icon">
              <div class="card-icon">
                <i class="material-icons">add</i>
              </div>
              <h4 class="card-title">
                {{ $t('global.create') }}
                <strong>{{ $t('cruds.booking.title_singular') }}</strong>
              </h4>
            </div>
            <div class="card-body">
              <back-button></back-button>
            </div>
            <div class="card-body">
              <bootstrap-alert />
              <div class="row">
                <div class="col-md-12">
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.customer,
                      'is-focused': activeField == 'customer'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.booking.fields.customer')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.customer"
                      @input="updateCustomer"
                      @focus="focusField('customer')"
                      @blur="clearFocus"
                      required
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.phone_number,
                      'is-focused': activeField == 'phone_number'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.booking.fields.phone_number')
                    }}</label>
                    <input
                      class="form-control"
                      type="text"
                      :value="entry.phone_number"
                      @input="updatePhoneNumber"
                      @focus="focusField('phone_number')"
                      @blur="clearFocus"
                      required
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.booking_day,
                      'is-focused': activeField == 'booking_day'
                    }"
                  >
                    <label class="bmd-label-floating required">{{
                      $t('cruds.booking.fields.booking_day')
                    }}</label>
                    <datetime-picker
                      class="form-control"
                      type="text"
                      picker="date"
                      :value="entry.booking_day"
                      @input="updateBookingDay"
                      @focus="focusField('booking_day')"
                      @blur="clearFocus"
                      required
                    >
                    </datetime-picker>
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.slect_room.length !== 0,
                      'is-focused': activeField == 'slect_room'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.booking.fields.slect_room')
                    }}</label>
                    <v-select
                      name="slect_room"
                      label="room_name"
                      :key="'slect_room-field'"
                      :value="entry.slect_room"
                      :options="lists.slect_room"
                      :closeOnSelect="false"
                      multiple
                      @input="updateSlectRoom"
                      @search.focus="focusField('slect_room')"
                      @search.blur="clearFocus"
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.select_service.length !== 0,
                      'is-focused': activeField == 'select_service'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.booking.fields.select_service')
                    }}</label>
                    <v-select
                      name="select_service"
                      label="name"
                      :key="'select_service-field'"
                      :value="entry.select_service"
                      :options="lists.select_service"
                      :closeOnSelect="false"
                      multiple
                      @input="updateSelectService"
                      @search.focus="focusField('select_service')"
                      @search.blur="clearFocus"
                    />
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.total_price,
                      'is-focused': activeField == 'total_price'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.booking.fields.total_price')
                    }}</label>
                    <input
                      class="form-control"
                      type="number"
                      step="0.01"
                      :value="entry.total_price"
                      @input="updateTotalPrice"
                      @focus="focusField('total_price')"
                      @blur="clearFocus"
                    />
                  </div>
                  <div class="form-group">
                    <label class="required">{{
                      $t('cruds.booking.fields.status')
                    }}</label>
                    <v-radio
                      :value="entry.status"
                      :options="lists.status"
                      @change="updateStatus"
                    >
                    </v-radio>
                  </div>
                  <div
                    class="form-group bmd-form-group"
                    :class="{
                      'has-items': entry.promotion_id !== null,
                      'is-focused': activeField == 'promotion'
                    }"
                  >
                    <label class="bmd-label-floating">{{
                      $t('cruds.booking.fields.promotion')
                    }}</label>
                    <v-select
                      name="promotion"
                      label="code"
                      :key="'promotion-field'"
                      :value="entry.promotion_id"
                      :options="lists.promotion"
                      :reduce="entry => entry.id"
                      @input="updatePromotion"
                      @search.focus="focusField('promotion')"
                      @search.blur="clearFocus"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="card-footer">
              <vue-button-spinner
                class="btn-primary"
                :status="status"
                :isLoading="loading"
                :disabled="loading"
              >
                {{ $t('global.save') }}
              </vue-button-spinner>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      status: '',
      activeField: ''
    }
  },
  computed: {
    ...mapGetters('BookingsSingle', ['entry', 'loading', 'lists'])
  },
  mounted() {
    this.fetchCreateData()
  },
  beforeDestroy() {
    this.resetState()
  },
  methods: {
    ...mapActions('BookingsSingle', [
      'storeData',
      'resetState',
      'setCustomer',
      'setPhoneNumber',
      'setBookingDay',
      'setSlectRoom',
      'setSelectService',
      'setTotalPrice',
      'setStatus',
      'setPromotion',
      'fetchCreateData'
    ]),
    updateCustomer(e) {
      this.setCustomer(e.target.value)
    },
    updatePhoneNumber(e) {
      this.setPhoneNumber(e.target.value)
    },
    updateBookingDay(e) {
      this.setBookingDay(e.target.value)
    },
    updateSlectRoom(value) {
      this.setSlectRoom(value)
    },
    updateSelectService(value) {
      this.setSelectService(value)
    },
    updateTotalPrice(e) {
      this.setTotalPrice(e.target.value)
    },
    updateStatus(value) {
      this.setStatus(value)
    },
    updatePromotion(value) {
      this.setPromotion(value)
    },
    submitForm() {
      this.storeData()
        .then(() => {
          this.$router.push({ name: 'bookings.index' })
          this.$eventHub.$emit('create-success')
        })
        .catch(error => {
          this.status = 'failed'
          _.delay(() => {
            this.status = ''
          }, 3000)
        })
    },
    focusField(name) {
      this.activeField = name
    },
    clearFocus() {
      this.activeField = ''
    }
  }
}
</script>
