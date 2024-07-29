<?php

return [
    'userManagement' => [
        'title'          => 'จัดการผู้ใช้',
        'title_singular' => 'จัดการผู้ใช้',
    ],
    'permission' => [
        'title'          => 'การอนุญาต',
        'title_singular' => 'การอนุญาต',
        'fields'         => [
            'id'                => 'ID',
            'id_helper'         => ' ',
            'title'             => 'Title',
            'title_helper'      => ' ',
            'created_at'        => 'Created at',
            'created_at_helper' => ' ',
            'updated_at'        => 'Updated at',
            'updated_at_helper' => ' ',
            'deleted_at'        => 'Deleted at',
            'deleted_at_helper' => ' ',
        ],
    ],
    'role' => [
        'title'          => 'หน้าที่',
        'title_singular' => 'หน้าที่',
        'fields'         => [
            'id'                 => 'ID',
            'id_helper'          => ' ',
            'title'              => 'Title',
            'title_helper'       => ' ',
            'permissions'        => 'Permissions',
            'permissions_helper' => ' ',
            'created_at'         => 'Created at',
            'created_at_helper'  => ' ',
            'updated_at'         => 'Updated at',
            'updated_at_helper'  => ' ',
            'deleted_at'         => 'Deleted at',
            'deleted_at_helper'  => ' ',
        ],
    ],
    'user' => [
        'title'          => 'ผู้ใช้งาน',
        'title_singular' => 'ผู้ใช้งาน',
        'fields'         => [
            'id'                           => 'ID',
            'id_helper'                    => ' ',
            'name'                         => 'Name',
            'name_helper'                  => ' ',
            'email'                        => 'Email',
            'email_helper'                 => ' ',
            'email_verified_at'            => 'Email verified at',
            'email_verified_at_helper'     => ' ',
            'password'                     => 'Password',
            'password_helper'              => ' ',
            'roles'                        => 'Roles',
            'roles_helper'                 => ' ',
            'remember_token'               => 'Remember Token',
            'remember_token_helper'        => ' ',
            'created_at'                   => 'Created at',
            'created_at_helper'            => ' ',
            'updated_at'                   => 'Updated at',
            'updated_at_helper'            => ' ',
            'deleted_at'                   => 'Deleted at',
            'deleted_at_helper'            => ' ',
            'phone'                        => 'Phone',
            'phone_helper'                 => ' ',
            'national_id_image_url'        => 'National Id Image Url',
            'national_id_image_url_helper' => ' ',
            'profile_image_url'            => 'Profile Image Url',
            'profile_image_url_helper'     => ' ',
        ],
    ],
    'expenseManagement' => [
        'title'          => 'Expense Management',
        'title_singular' => 'Expense Management',
    ],
    'expenseCategory' => [
        'title'          => 'ประเภทของค่าใช้จ่าย',
        'title_singular' => 'ประเภทของค่าใช้จ่าย',
        'fields'         => [
            'id'                => 'ID',
            'id_helper'         => ' ',
            'name'              => 'Name',
            'name_helper'       => ' ',
            'created_at'        => 'Created at',
            'created_at_helper' => ' ',
            'updated_at'        => 'Updated at',
            'updated_at_helper' => ' ',
            'deleted_at'        => 'Deleted at',
            'deleted_at_helper' => ' ',
        ],
    ],
    'incomeCategory' => [
        'title'          => 'ประเภทของรายได้',
        'title_singular' => 'ประเภทของรายได้',
        'fields'         => [
            'id'                => 'ID',
            'id_helper'         => ' ',
            'name'              => 'Name',
            'name_helper'       => ' ',
            'created_at'        => 'Created at',
            'created_at_helper' => ' ',
            'updated_at'        => 'Updated at',
            'updated_at_helper' => ' ',
            'deleted_at'        => 'Deleted at',
            'deleted_at_helper' => ' ',
        ],
    ],
    'expense' => [
        'title'          => 'ค่าใช้จ่าย',
        'title_singular' => 'ค่าใช้จ่าย',
        'fields'         => [
            'id'                      => 'ID',
            'id_helper'               => ' ',
            'expense_category'        => 'Expense Category',
            'expense_category_helper' => ' ',
            'entry_date'              => 'Entry Date',
            'entry_date_helper'       => ' ',
            'amount'                  => 'Amount',
            'amount_helper'           => ' ',
            'description'             => 'Description',
            'description_helper'      => ' ',
            'created_at'              => 'Created at',
            'created_at_helper'       => ' ',
            'updated_at'              => 'Updated at',
            'updated_at_helper'       => ' ',
            'deleted_at'              => 'Deleted at',
            'deleted_at_helper'       => ' ',
        ],
    ],
    'income' => [
        'title'          => 'รายได้',
        'title_singular' => 'รายได้',
        'fields'         => [
            'id'                     => 'ID',
            'id_helper'              => ' ',
            'income_category'        => 'Income Category',
            'income_category_helper' => ' ',
            'entry_date'             => 'Entry Date',
            'entry_date_helper'      => ' ',
            'amount'                 => 'Amount',
            'amount_helper'          => ' ',
            'description'            => 'Description',
            'description_helper'     => ' ',
            'created_at'             => 'Created at',
            'created_at_helper'      => ' ',
            'updated_at'             => 'Updated at',
            'updated_at_helper'      => ' ',
            'deleted_at'             => 'Deleted at',
            'deleted_at_helper'      => ' ',
        ],
    ],
    'expenseReport' => [
        'title'          => 'รายงานประจำเดือน',
        'title_singular' => 'รายงานประจำเดือน',
        'reports'        => [
            'title'             => 'รายงาน',
            'title_singular'    => 'รายงาน',
            'incomeReport'      => 'รายงานรายได้',
            'incomeByCategory'  => 'รายได้แบ่งตามประเภท',
            'expenseByCategory' => 'ค่าใช้จ่ายแบ่งตามประเภท',
            'income'            => 'รายได้',
            'expense'           => 'ค่าใช้จ่าย',
            'profit'            => 'กำไร',
        ],
    ],
    'contentManagement' => [
        'title'          => 'Content management',
        'title_singular' => 'Content management',
    ],
    'contentCategory' => [
        'title'          => 'Categories',
        'title_singular' => 'Category',
        'fields'         => [
            'id'                => 'ID',
            'id_helper'         => ' ',
            'name'              => 'Name',
            'name_helper'       => ' ',
            'slug'              => 'Slug',
            'slug_helper'       => ' ',
            'created_at'        => 'Created at',
            'created_at_helper' => ' ',
            'updated_at'        => 'Updated at',
            'updated_at_helper' => ' ',
            'deleted_at'        => 'Deleted at',
            'deleted_at_helper' => ' ',
        ],
    ],
    'contentTag' => [
        'title'          => 'Tags',
        'title_singular' => 'Tag',
        'fields'         => [
            'id'                => 'ID',
            'id_helper'         => ' ',
            'name'              => 'Name',
            'name_helper'       => ' ',
            'slug'              => 'Slug',
            'slug_helper'       => ' ',
            'created_at'        => 'Created at',
            'created_at_helper' => ' ',
            'updated_at'        => 'Updated at',
            'updated_at_helper' => ' ',
            'deleted_at'        => 'Deleted at',
            'deleted_at_helper' => ' ',
        ],
    ],
    'contentPage' => [
        'title'          => 'Pages',
        'title_singular' => 'Page',
        'fields'         => [
            'id'                    => 'ID',
            'id_helper'             => ' ',
            'title'                 => 'Title',
            'title_helper'          => ' ',
            'category'              => 'Categories',
            'category_helper'       => ' ',
            'tag'                   => 'Tags',
            'tag_helper'            => ' ',
            'page_text'             => 'Full Text',
            'page_text_helper'      => ' ',
            'excerpt'               => 'Excerpt',
            'excerpt_helper'        => ' ',
            'featured_image'        => 'Featured Image',
            'featured_image_helper' => ' ',
            'created_at'            => 'Created at',
            'created_at_helper'     => ' ',
            'updated_at'            => 'Updated at',
            'updated_at_helper'     => ' ',
            'deleted_at'            => 'Deleted at',
            'deleted_at_helper'     => ' ',
        ],
    ],
    'roomManagement' => [
        'title'          => 'Room Management',
        'title_singular' => 'Room Management',
    ],
    'bookingManagement' => [
        'title'          => 'Booking Management',
        'title_singular' => 'Booking Management',
    ],
    'serviceManagement' => [
        'title'          => 'Service Management',
        'title_singular' => 'Service Management',
    ],
    'roomType' => [
        'title'          => 'Room Types',
        'title_singular' => 'Room Type',
        'fields'         => [
            'id'                 => 'ID',
            'id_helper'          => ' ',
            'type'               => 'Type',
            'type_helper'        => ' ',
            'description'        => 'Description',
            'description_helper' => ' ',
            'image_url'          => 'Image Url',
            'image_url_helper'   => ' ',
            'created_at'         => 'Created at',
            'created_at_helper'  => ' ',
            'updated_at'         => 'Updated at',
            'updated_at_helper'  => ' ',
            'deleted_at'         => 'Deleted at',
            'deleted_at_helper'  => ' ',
        ],
    ],
    'room' => [
        'title'          => 'Rooms',
        'title_singular' => 'Room',
        'fields'         => [
            'id'                     => 'ID',
            'id_helper'              => ' ',
            'room_type'              => 'Room Type',
            'room_type_helper'       => ' ',
            'price_per_night'        => 'Price Per Night',
            'price_per_night_helper' => ' ',
            'description'            => 'Description',
            'description_helper'     => ' ',
            'image_url'              => 'Image Url',
            'image_url_helper'       => ' ',
            'created_at'             => 'Created at',
            'created_at_helper'      => ' ',
            'updated_at'             => 'Updated at',
            'updated_at_helper'      => ' ',
            'deleted_at'             => 'Deleted at',
            'deleted_at_helper'      => ' ',
            'max_people'             => 'Max People',
            'max_people_helper'      => ' ',
            'room_name'              => 'Room Name',
            'room_name_helper'       => ' ',
        ],
    ],
    'roomMaintenance' => [
        'title'          => 'Room Maintenance',
        'title_singular' => 'Room Maintenance',
        'fields'         => [
            'id'                 => 'ID',
            'id_helper'          => ' ',
            'room'               => 'Room',
            'room_helper'        => ' ',
            'start_date'         => 'Start Date',
            'start_date_helper'  => ' ',
            'end_date'           => 'End Date',
            'end_date_helper'    => ' ',
            'description'        => 'Description',
            'description_helper' => ' ',
            'created_at'         => 'Created at',
            'created_at_helper'  => ' ',
            'updated_at'         => 'Updated at',
            'updated_at_helper'  => ' ',
            'deleted_at'         => 'Deleted at',
            'deleted_at_helper'  => ' ',
            'room_name'          => 'Room Name',
            'room_name_helper'   => ' ',
        ],
    ],
    'serviceType' => [
        'title'          => 'Service Types',
        'title_singular' => 'Service Type',
        'fields'         => [
            'id'                 => 'ID',
            'id_helper'          => ' ',
            'type'               => 'Type',
            'type_helper'        => ' ',
            'description'        => 'Description',
            'description_helper' => ' ',
            'image_url'          => 'Image Url',
            'image_url_helper'   => ' ',
            'created_at'         => 'Created at',
            'created_at_helper'  => ' ',
            'updated_at'         => 'Updated at',
            'updated_at_helper'  => ' ',
            'deleted_at'         => 'Deleted at',
            'deleted_at_helper'  => ' ',
        ],
    ],
    'service' => [
        'title'          => 'Services',
        'title_singular' => 'Service',
        'fields'         => [
            'id'                  => 'ID',
            'id_helper'           => ' ',
            'service_type'        => 'Service Type',
            'service_type_helper' => ' ',
            'name'                => 'Name',
            'name_helper'         => ' ',
            'description'         => 'Description',
            'description_helper'  => ' ',
            'price'               => 'Price',
            'price_helper'        => ' ',
            'image_url'           => 'Image Url',
            'image_url_helper'    => ' ',
            'created_at'          => 'Created at',
            'created_at_helper'   => ' ',
            'updated_at'          => 'Updated at',
            'updated_at_helper'   => ' ',
            'deleted_at'          => 'Deleted at',
            'deleted_at_helper'   => ' ',
        ],
    ],
    'promotion' => [
        'title'          => 'Promotions',
        'title_singular' => 'Promotion',
        'fields'         => [
            'id'                    => 'ID',
            'id_helper'             => ' ',
            'code'                  => 'Code',
            'code_helper'           => ' ',
            'discount_type'         => 'Discount Type',
            'discount_type_helper'  => ' ',
            'discount_value'        => 'Discount Value',
            'discount_value_helper' => ' ',
            'start_date'            => 'Start Date',
            'start_date_helper'     => ' ',
            'end_date'              => 'End Date',
            'end_date_helper'       => ' ',
            'status'                => 'Status',
            'status_helper'         => ' ',
            'created_at'            => 'Created at',
            'created_at_helper'     => ' ',
            'updated_at'            => 'Updated at',
            'updated_at_helper'     => ' ',
            'deleted_at'            => 'Deleted at',
            'deleted_at_helper'     => ' ',
            'image_url'             => 'Image Url',
            'image_url_helper'      => ' ',
        ],
    ],
    'booking' => [
        'title'          => 'Bookings',
        'title_singular' => 'Booking',
        'fields'         => [
            'id'                    => 'ID',
            'id_helper'             => ' ',
            'total_price'           => 'Total Price',
            'total_price_helper'    => ' ',
            'status'                => 'Status',
            'status_helper'         => ' ',
            'promotion'             => 'Promotion',
            'promotion_helper'      => ' ',
            'created_at'            => 'Created at',
            'created_at_helper'     => ' ',
            'updated_at'            => 'Updated at',
            'updated_at_helper'     => ' ',
            'deleted_at'            => 'Deleted at',
            'deleted_at_helper'     => ' ',
            'phone_number'          => 'Phone Number',
            'phone_number_helper'   => ' ',
            'booking_day'           => 'Booking Day',
            'booking_day_helper'    => ' ',
            'customer'              => 'Customer',
            'customer_helper'       => ' ',
            'slect_room'            => 'Slect Room',
            'slect_room_helper'     => ' ',
            'select_service'        => 'Select Service',
            'select_service_helper' => ' ',
        ],
    ],
    'payment' => [
        'title'          => 'Payments',
        'title_singular' => 'Payment',
        'fields'         => [
            'id'                    => 'ID',
            'id_helper'             => ' ',
            'booking'               => 'Booking',
            'booking_helper'        => ' ',
            'amount'                => 'Amount',
            'amount_helper'         => ' ',
            'payment_date'          => 'Payment Date',
            'payment_date_helper'   => ' ',
            'receipt_image'         => 'Receipt Image',
            'receipt_image_helper'  => ' ',
            'status'                => 'Status',
            'status_helper'         => ' ',
            'payment_type'          => 'Payment Type',
            'payment_type_helper'   => ' ',
            'payment_method'        => 'Payment Method',
            'payment_method_helper' => ' ',
            'processed_by'          => 'Processed By',
            'processed_by_helper'   => ' ',
            'created_at'            => 'Created at',
            'created_at_helper'     => ' ',
            'updated_at'            => 'Updated at',
            'updated_at_helper'     => ' ',
            'deleted_at'            => 'Deleted at',
            'deleted_at_helper'     => ' ',
        ],
    ],

];
