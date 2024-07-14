
import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']  // Corrected 'styleUrl' to 'styleUrls'
})
export class ProfileComponent implements OnInit {
  userprofile: any = {}; // Changed from array to object
  datastoreinsession: any = {}; // Changed from array to object

  constructor(private service: ServiceService) {}

  ngOnInit(): void {
    // Retrieve the user details stored in session
    this.datastoreinsession = this.service.getUserDetails();

    // Fetch all users from the service
    this.service.getAllusers().subscribe((response: any) => {
        // Manually iterate over the response to find the matching user
        for (let user of response.users) {
          if (user.id === this.datastoreinsession.id) {
            this.userprofile = user;
            break;  // Stop iteration once the user is found
          }
        }
        console.log(this.userprofile);
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }
}
