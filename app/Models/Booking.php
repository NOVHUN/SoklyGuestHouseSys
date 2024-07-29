<?php

namespace App\Models;

use App\Support\HasAdvancedFilter;
use Carbon\Carbon;
use DateTimeInterface;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Booking extends Model
{
    use HasAdvancedFilter, SoftDeletes, HasFactory;

    public $table = 'bookings';

    protected $appends = [
        'status_label',
    ];

    protected $dates = [
        'booking_day',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected $orderable = [
        'id',
        'customer',
        'phone_number',
        'booking_day',
        'total_price',
        'status',
        'promotion.code',
    ];

    protected $fillable = [
        'customer',
        'phone_number',
        'booking_day',
        'total_price',
        'status',
        'promotion_id',
        'created_at',
        'updated_at',
        'deleted_at',
    ];

    protected $filterable = [
        'id',
        'customer',
        'phone_number',
        'booking_day',
        'slect_room.room_name',
        'select_service.name',
        'total_price',
        'status',
        'promotion.code',
    ];

    public const STATUS_RADIO = [
        [
            'label' => 'Pending',
            'value' => 'pending',
        ],
        [
            'label' => 'Confirmed',
            'value' => 'confirmed',
        ],
        [
            'label' => 'Completed',
            'value' => 'completed',
        ],
        [
            'label' => 'Cancelled',
            'value' => 'cancelled',
        ],
    ];

    protected function serializeDate(DateTimeInterface $date)
    {
        return $date->format('Y-m-d H:i:s');
    }

    public function getBookingDayAttribute($value)
    {
        return $value ? Carbon::createFromFormat('Y-m-d', $value)->format(config('project.date_format')) : null;
    }

    public function setBookingDayAttribute($value)
    {
        $this->attributes['booking_day'] = $value ? Carbon::createFromFormat(config('project.date_format'), $value)->format('Y-m-d') : null;
    }

    public function slectRoom()
    {
        return $this->belongsToMany(Room::class);
    }

    public function selectService()
    {
        return $this->belongsToMany(Service::class);
    }

    public function getStatusLabelAttribute()
    {
        return collect(static::STATUS_RADIO)->firstWhere('value', $this->status)['label'] ?? '';
    }

    public function promotion()
    {
        return $this->belongsTo(Promotion::class);
    }
}
