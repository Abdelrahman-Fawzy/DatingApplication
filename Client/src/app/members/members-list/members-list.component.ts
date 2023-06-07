import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/model/member';
import { MembersService } from 'src/app/services/members.service';

@Component({
  selector: 'app-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.scss']
})
export class MembersListComponent implements OnInit {

  members: Member[] = []

  constructor(private memberServices: MembersService) { }

  ngOnInit(): void {
    this.loadMembers()
  }

  loadMembers() {
    this.memberServices.members().subscribe(members => {
      this.members = members
    })
  }

}
