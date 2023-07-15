<?php

namespace App\Events;

use App\Models\CashFlow;
use App\Models\TransactionHistory;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class CashFlowHistoryAfterCreatedEvent
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct( public TransactionHistory $transactionHistory )
    {
        // ...
    }
}
