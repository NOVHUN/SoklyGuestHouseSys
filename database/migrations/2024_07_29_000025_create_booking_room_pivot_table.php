<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBookingRoomPivotTable extends Migration
{
    public function up()
    {
        Schema::create('booking_room', function (Blueprint $table) {
            $table->unsignedBigInteger('booking_id');
            $table->foreign('booking_id', 'booking_id_fk_9983380')->references('id')->on('bookings')->onDelete('cascade');
            $table->unsignedBigInteger('room_id');
            $table->foreign('room_id', 'room_id_fk_9983380')->references('id')->on('rooms')->onDelete('cascade');
        });
    }
}
