﻿var dTable;
$(document).ready(function () {

    var url = window.location.search;
    if (url.includes("pending")) {
        OrderShow("pending");
    }
    else if (url.includes("approved"))
        {
            OrderShow("approved");
        }
        
    else {
        OrderShow(status);
         }




    
});

function OrderShow(status) {
    dTable = $('#myTable').DataTable({
        "ajax": {
            "url":  "/Admin/Order/AllOrders?status=" + status,
            "type": "GET",
            "datatype": "json"
        },
        "columns": [
            { "data": "name" },
            { "data": "orderStatus" },
            { "data": "phon" },
            { "data": "orderTotal" },
            {
                "data": "OrderHeaderId",
                "render": function (data) {
                    return `                    
                    <a href="/Admin/Order/OrderDetails?id=${data}"><i class="bi bi-pencil-square"></i></a>                      
                   `
                }
            },

        ]
    });
}
