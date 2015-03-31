"use strict";
$("#miTabla").DataTable({
	/*paging: false,
	filter:false*/
	"order": [[0,'asc']],
	"columnDefs":[
		{
			"targets":[2],
			visible:false,
			"searchable":true
		},
		{
			"targets":[3],
			visible:false,
			searchable:false
		},
		{
			"targets":[4],
			"orderable":false
		}
	],
	"stateSave": true,
	"language":{
		url:'scripts/datatables.spanish.lang'
	}
});
