<?php

namespace App\Http\Requests;

use App\Models\Booking;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;
use Illuminate\Support\Arr;

class UpdateBookingRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('booking_edit');
    }

    public function rules()
    {
        return [
            'customer' => [
                'string',
                'required',
            ],
            'phone_number' => [
                'string',
                'required',
            ],
            'booking_day' => [
                'date_format:' . config('project.date_format'),
                'required',
            ],
            'slect_room' => [
                'array',
            ],
            'slect_room.*.id' => [
                'integer',
                'exists:rooms,id',
            ],
            'select_service' => [
                'array',
            ],
            'select_service.*.id' => [
                'integer',
                'exists:services,id',
            ],
            'total_price' => [
                'numeric',
                'nullable',
            ],
            'status' => [
                'required',
                'in:' . implode(',', Arr::pluck(Booking::STATUS_RADIO, 'value')),
            ],
            'promotion_id' => [
                'integer',
                'exists:promotions,id',
                'nullable',
            ],
        ];
    }
}
