<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Services\ChartsService;

class DashboardApiController extends Controller
{
    public function index()
    {
        $stats0 = new ChartsService([
            'title'              => 'Total User Booking',
            'chart_type'         => 'stats',
            'model'              => 'App\Models\Booking',
            'column_class'       => 'col-md-3',
            'footer_icon'        => 'date_range',
            'aggregate_function' => 'count',
            'aggregate_field'    => '',
            'footer_text'        => 'Last 7 days',
            'filter_by_field'    => 'created_at',
            'filter_by_period'   => 7,
        ]);

        $stats1 = new ChartsService([
            'title'              => 'Total Amount Booking',
            'chart_type'         => 'stats',
            'model'              => 'App\Models\Booking',
            'column_class'       => 'col-md-3',
            'footer_icon'        => 'date_range',
            'aggregate_function' => 'sum',
            'aggregate_field'    => 'total_price',
            'footer_text'        => 'Last 7 days',
            'filter_by_field'    => 'created_at',
            'filter_by_period'   => 7,
        ]);

        $stats2 = new ChartsService([
            'title'              => 'Amount of Payment',
            'chart_type'         => 'stats',
            'model'              => 'App\Models\Payment',
            'column_class'       => 'col-md-3',
            'footer_icon'        => 'date_range',
            'aggregate_function' => 'sum',
            'aggregate_field'    => 'amount',
            'footer_text'        => 'Last 7 days',
            'filter_by_field'    => 'created_at',
            'filter_by_period'   => 7,
        ]);

        $stats3 = new ChartsService([
            'title'              => 'Number of Room Manintenance',
            'chart_type'         => 'stats',
            'model'              => 'App\Models\RoomMaintenance',
            'column_class'       => 'col-md-3',
            'footer_icon'        => 'date_range',
            'aggregate_function' => 'count',
            'aggregate_field'    => '',
            'footer_text'        => 'Last 7 days',
            'filter_by_field'    => 'created_at',
            'filter_by_period'   => 7,
        ]);

        $bar4 = new ChartsService([
            'title'              => 'Amount of Imcome',
            'chart_type'         => 'bar',
            'model'              => 'App\Models\Income',
            'group_by_field'     => 'entry_date',
            'group_by_period'    => 'week',
            'column_class'       => 'col-md-6',
            'aggregate_function' => 'sum',
            'aggregate_field'    => 'amount',
            'filter_by_field'    => 'created_at',
            'filter_by_period'   => 30,
        ]);

        $bar5 = new ChartsService([
            'title'              => 'Amount of Expenes',
            'chart_type'         => 'bar',
            'model'              => 'App\Models\Expense',
            'group_by_field'     => 'entry_date',
            'group_by_period'    => 'week',
            'column_class'       => 'col-md-6',
            'aggregate_function' => 'sum',
            'aggregate_field'    => 'amount',
            'filter_by_field'    => 'created_at',
            'filter_by_period'   => 30,
        ]);

        return response()->json(compact('stats0', 'stats1', 'stats2', 'stats3', 'bar4', 'bar5'));
    }
}
