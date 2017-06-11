var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import 'rxjs/Rx';
import { ToastsManager } from "ng2-toastr";
var AdminComponent = (function () {
    function AdminComponent(toast) {
        this.toast = toast;
        this.when = 'for 6 months';
        this.pieChartRequest = {
            chartType: 'PieChart',
            dataTable: [
                ['Request', 'Info'],
                ['Request statistic', 100],
            ],
            options: {
                title: 'Request statistic by progress',
                legend: { position: 'bottom'
                },
                is3D: true,
                height: 550
            }
        };
        this.pieChartRequestPriority = {
            chartType: 'PieChart',
            dataTable: [
                ['Request', 'Info'],
                ['Request statistic', 100],
            ],
            options: {
                title: 'Request statistic by priority',
                legend: { position: 'bottom'
                },
                is3D: true,
                height: 550
            }
        };
        this.pieChartRequestForSixMonths = {
            chartType: 'BarChart',
            dataTable: [
                ['Request', 'Open', 'Closed'],
                ['Status', 100, 100],
            ],
            options: {
                hAxis: {
                    title: 'Request statistic ' + this.when,
                    minValue: 0,
                    textStyle: {
                        bold: true,
                        fontSize: 12,
                        color: '#4d4d4d'
                    },
                    titleTextStyle: {
                        bold: true,
                        fontSize: 18,
                        color: '#4d4d4d'
                    }
                },
                vAxis: {
                    title: 'Requests',
                    textStyle: {
                        fontSize: 14,
                        bold: true,
                        color: '#848484'
                    },
                    titleTextStyle: {
                        fontSize: 14,
                        bold: true,
                        color: '#848484'
                    }
                }
            }
        };
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent.prototype.setStatisticByProgress = function () {
        this.pieChartRequest = {
            chartType: 'PieChart',
            dataTable: [
                ['Request', 'Info'],
                ['Free: ' + this.statisticForAdminDashBoard[0], this.statisticForAdminDashBoard[0]],
                ['Joined: ' + this.statisticForAdminDashBoard[1], this.statisticForAdminDashBoard[1]],
                ['In progress: ' + this.statisticForAdminDashBoard[2], this.statisticForAdminDashBoard[2]],
            ],
            options: {
                title: 'Request statistic by progress',
                legend: { position: 'bottom'
                },
                is3D: true,
                height: 550
            },
        };
    };
    AdminComponent.prototype.setStatisticByPriority = function () {
        this.pieChartRequestPriority = {
            chartType: 'PieChart',
            dataTable: [
                ['Request', 'Info'],
                ['High: ' + this.statisticForAdminDashBoard[5], this.statisticForAdminDashBoard[5]],
                ['Normal: ' + this.statisticForAdminDashBoard[6], this.statisticForAdminDashBoard[6]],
                ['Low: ' + this.statisticForAdminDashBoard[7], this.statisticForAdminDashBoard[7]],
            ],
            options: {
                title: 'Request statistic by priority',
                legend: { position: 'bottom'
                },
                is3D: true,
                height: 550
            },
        };
    };
    AdminComponent.prototype.setStatisticForBarChart = function () {
        this.pieChartRequestForSixMonths = {
            chartType: 'BarChart',
            dataTable: [
                ['Requests', 'Open', 'Closed'],
                ['Status', this.statisticForAdminDashBoard[4], this.statisticForAdminDashBoard[3]],
            ],
            options: {
                hAxis: {
                    title: 'Request statistic ' + this.when,
                    minValue: 0,
                    textStyle: {
                        bold: true,
                        fontSize: 12,
                        color: '#4d4d4d'
                    },
                    titleTextStyle: {
                        bold: true,
                        fontSize: 18,
                        color: '#4d4d4d'
                    }
                },
                vAxis: {
                    title: 'Requests',
                    textStyle: {
                        fontSize: 14,
                        bold: true,
                        color: '#848484'
                    },
                    titleTextStyle: {
                        fontSize: 14,
                        bold: true,
                        color: '#848484'
                    }
                }
            }
        };
    };
    return AdminComponent;
}());
AdminComponent = __decorate([
    Component({
        selector: 'admin-home',
        templateUrl: 'admin.component.html',
        styleUrls: ['admin.component.css']
    }),
    __metadata("design:paramtypes", [ToastsManager])
], AdminComponent);
export { AdminComponent };
//# sourceMappingURL=/Users/igor/workspace/TestAngular2/frontend/src/app/pages/home/admin/admin.component.js.map