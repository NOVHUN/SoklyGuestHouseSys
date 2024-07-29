<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreBookingRequest;
use App\Http\Requests\UpdateBookingRequest;
use App\Http\Resources\Admin\BookingResource;
use App\Models\Booking;
use App\Models\Promotion;
use App\Models\Room;
use App\Models\Service;
use Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class BookingsApiController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('booking_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new BookingResource(Booking::with(['slectRoom', 'selectService', 'promotion'])->advancedFilter());
    }

    public function store(StoreBookingRequest $request)
    {
        $booking = Booking::create($request->validated());
        $booking->slectRoom()->sync($request->input('slect_room.*.id', []));
        $booking->selectService()->sync($request->input('select_service.*.id', []));

        return (new BookingResource($booking))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function create()
    {
        abort_if(Gate::denies('booking_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'meta' => [
                'slect_room'     => Room::get(['id', 'room_name']),
                'select_service' => Service::get(['id', 'name']),
                'promotion'      => Promotion::get(['id', 'code']),
                'status'         => Booking::STATUS_RADIO,
            ],
        ]);
    }

    public function show(Booking $booking)
    {
        abort_if(Gate::denies('booking_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new BookingResource($booking->load(['slectRoom', 'selectService', 'promotion']));
    }

    public function update(UpdateBookingRequest $request, Booking $booking)
    {
        $booking->update($request->validated());
        $booking->slectRoom()->sync($request->input('slect_room.*.id', []));
        $booking->selectService()->sync($request->input('select_service.*.id', []));

        return (new BookingResource($booking))
            ->response()
            ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    public function edit(Booking $booking)
    {
        abort_if(Gate::denies('booking_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'data' => new BookingResource($booking->load(['slectRoom', 'selectService', 'promotion'])),
            'meta' => [
                'slect_room'     => Room::get(['id', 'room_name']),
                'select_service' => Service::get(['id', 'name']),
                'promotion'      => Promotion::get(['id', 'code']),
                'status'         => Booking::STATUS_RADIO,
            ],
        ]);
    }

    public function destroy(Booking $booking)
    {
        abort_if(Gate::denies('booking_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $booking->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
