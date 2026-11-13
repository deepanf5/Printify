import { Component } from '@angular/core';
import { Header } from '../header/header';
import { SideBar } from '../side-bar/side-bar';
import { Footer } from '../footer/footer';
import { HlmSidebarImports } from '@spartan-ng/helm/sidebar';

@Component({
  imports: [Header, SideBar, Footer, HlmSidebarImports],
  selector: 'app-layout',
  styleUrl: './layout.css',
  templateUrl: './layout.html',
})
export class Layout {}
